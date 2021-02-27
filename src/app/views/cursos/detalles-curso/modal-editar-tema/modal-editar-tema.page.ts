import {Component, Input, OnInit} from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {CursosService} from '../../cursos.service';
import {GlobalService} from '../../../../services/global.service';

@Component({
  selector: 'app-modal-editar-tema',
  templateUrl: './modal-editar-tema.page.html',
  styleUrls: ['./modal-editar-tema.page.scss'],
})
export class ModalEditarTemaPage implements OnInit {

  @Input() id: any;
  @Input() themeId: any;
  @Input() title: any;
  @Input() description: any;

  titleModal = 'Crear tema';
  Editor = ClassicEditor;
  configEditor: any = null;

  formData: any = {
    title: null,
    description: null,
  };

  constructor(
    private alertCtrl: AlertController,
    private globalSer: GlobalService,
    private modalCtrl: ModalController,
    private cursosService: CursosService
  ) {
    this.configEditor = this.globalSer.configEditor;
  }

  ngOnInit() {
    if (this.title) {
      this.formData.title = this.title;
      this.titleModal = `Editar: ${this.title}`;
    }
    if (this.description) this.formData.description = this.description;
  }

  closeModal(data: any = null) {
    this.modalCtrl.dismiss(data);
  }

  async createTheme() {
    await this.globalSer.presentLoading();
    const updated: any = await this.cursosService.createThemeCourse(this.id, this.formData);

    if (updated && !updated.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('Alerta', 'Se ha agregado el tema exitosamente.');
      this.closeModal(updated);
    }
    else if (updated && updated.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async updateTheme() {
    await this.globalSer.presentLoading();
    const updated: any = await this.cursosService.updateThemeCourse(this.id, this.themeId, this.formData);

    if (updated && !updated.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('Alerta', 'Se ha actualizado el tema exitosamente.');
      this.closeModal({
        title: updated.title,
        description: updated.description,
      });
    }
    else if (updated && updated.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async confirmEdit() {
    const validated = this.cursosService.validationEdit('theme', this.formData);

    if (!validated) {
      const alert = await this.alertCtrl.create({
        header: 'Confirme',
        message: `¿Está seguro qué desea ${this.themeId ? 'actualizar' : 'agregar'} este tema?`,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {}
          }, {
            text: 'Sí',
            handler: () => {
              if (this.themeId) this.updateTheme();
              else this.createTheme();
            }
          }
        ]
      });
      await alert.present();
    }
    else {
      await this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe completar el formulario.');
    }
  }

}
