import {Component, Input, OnInit} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {AlertController, ModalController} from '@ionic/angular';
import {CursosService} from '../../cursos.service';
import {GlobalService} from '../../../../services/global.service';

@Component({
  selector: 'app-modal-editar-contenido',
  templateUrl: './modal-editar-contenido.page.html',
  styleUrls: ['./modal-editar-contenido.page.scss'],
})
export class ModalEditarContenidoPage implements OnInit {

  @Input() id: string|null;
  @Input() themeId: string|null;
  @Input() contentId: string|null;
  @Input() title: string|null;
  @Input() description: string|null;
  @Input() urlVideo: string|null;

  titleModal = 'Agregar contenido';
  Editor = ClassicEditor;
  configEditor: any = null;

  formData: any = {
    title: null,
    description: null,
    urlVideo: null,
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
    if (this.urlVideo) this.formData.urlVideo = this.urlVideo;

  }

  closeModal(data: any = null) {
    this.modalCtrl.dismiss(data);
  }

  async createContent() {
    await this.globalSer.presentLoading();
    const created: any = await this.cursosService.createContentThemeCourse(this.id, this.themeId, this.formData);

    if (created && !created.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('Alerta', 'Se ha agregado el contenido al tema exitosamente.');
      this.closeModal(created);
    }
    else if (created && created.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async updateContent() {
    await this.globalSer.presentLoading();
    const updated: any = await this.cursosService.updateContentThemeCourse(this.id, this.themeId, this.contentId, this.formData);

    if (updated && !updated.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('Alerta', 'Se ha actualizado el contenido del tema exitosamente.');
      this.closeModal({
        title: updated.title,
        description: updated.description,
        urlVideo: updated.urlVideo,
      });
    }
    else if (updated && updated.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async confirmEdit() {
    const validated = this.cursosService.validationEdit('content', this.formData);

    if (!validated) {
      const alert = await this.alertCtrl.create({
        header: 'Confirme',
        message: `¿Está seguro qué desea ${this.themeId ? 'actualizar' : 'agregar'} este contenido?`,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {}
          }, {
            text: 'Sí',
            handler: () => {
              if (this.themeId && this.contentId) this.updateContent();
              else this.createContent();
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
