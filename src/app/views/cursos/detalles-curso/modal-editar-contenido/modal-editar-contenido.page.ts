import {Component, Input, OnInit} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {ModalController} from '@ionic/angular';
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

  titleModal = 'Agregar tema';
  Editor = ClassicEditor;
  configEditor: any = null;

  formData: any = {
    title: null,
    description: null,
    urlVideo: null,
  };

  constructor(
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

  async confirmCloseModal() {
    await this.globalSer.alertConfirm({
      header: 'Confirme',
      message: '¿Está seguro qué cerrar la ventana?<br><br>NOTA: Todos los cambios se perderán.',
      confirmAction: () => this.closeModal()
    });
  }

  disableButton() {
    const val1 = [null, ''];
    let counter = 0;

    if (val1.indexOf(this.formData.title) > -1) counter += 1;
    if (val1.indexOf(this.formData.urlVideo) > -1 && val1.indexOf(this.formData.description) > -1) counter += 1;

    return counter > 0;
  }

  async createContent() {
    await this.globalSer.presentLoading();
    const created: any = await this.cursosService.createThemeCourse(this.id, this.formData);

    if (created && !created.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', 'Se ha agregado el tema exitosamente.');
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
    const updated: any = await this.cursosService.updateThemeCourse(this.id, this.themeId, this.formData);

    if (updated && !updated.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado el tema exitosamente.');
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
      await this.globalSer.alertConfirm({
        header: 'Confirme',
        message: `¿Está seguro qué desea ${this.contentId ? 'actualizar' : 'agregar'} este tema?`,
        confirmAction: () => {
          if (this.themeId && this.contentId) this.updateContent();
          else this.createContent();
        }
      });
    }
    else {
      await this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe completar el formulario.');
    }
  }

}
