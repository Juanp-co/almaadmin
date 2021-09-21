import {Component, Input, OnInit} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {GlobalService} from '../../../services/global.service';
import {DataService} from '../../../services/data.service';
import {ChangeEvent} from '@ckeditor/ckeditor5-angular/ckeditor.component';
import {checkTitlesOrDescriptions, checkYoutubeUrl} from '../../../../Utils/validations.functions';
import {DevocionalesFormService} from './devocionales-form.service';

@Component({
  selector: 'app-devocionales-form',
  templateUrl: './devocionales-form.component.html',
  styleUrls: ['./devocionales-form.component.scss'],
})
export class DevocionalesFormComponent implements OnInit {

  @Input() data: any;
  @Input() handleCancel: () => void;
  @Input() handleSave: (data: any) => void;

  Editor = ClassicEditor;
  configEditor: any = null;
  formData: any = {
    title: null,
    description: null,
    urlVideo: null,
    picture: null,
  };
  id: string|null = null;

  constructor(
    private dataService: DataService,
    private devocionalesFormService: DevocionalesFormService,
    private globalSer: GlobalService,
  ) {
    this.configEditor = this.globalSer.configEditor;
    this.configEditor.placeholder = 'Indica la descripción del devocional aquí (*) ...';
  }

  ngOnInit() {
    if (this.data) {
      this.id = this.data._id || null;
      this.formData.title = this.data.title;
      this.formData.description = this.data.description;
      this.formData.picture = this.data.picture;
      this.formData.urlVideo = this.data.urlVideo;
    }
  }

  async save() {
    await this.globalSer.presentLoading('Agregando evento, por favor espere ...');
    const data: any = await this.devocionalesFormService.save(this.modelToSendForm());

    if (data && !data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', data.msg || 'Se ha agregado el devocional exitosamente.');
      if (!!this.handleCancel) this.handleCancel();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async update() {
    await this.globalSer.presentLoading('Actualizando evento, por favor espere ...');
    const res: any = await this.devocionalesFormService.update(this.id, this.modelToSendForm());

    if (res && !res.error) {
      const { devotional, msg } = res;
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', msg || 'Se ha actualizado el devocional exitosamente.');
      if (!!this.handleSave) this.handleSave(devotional);
    }
    else if (res && res.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  setFormData(input: string, ev: any) {
    this.formData[input] = ev.target.value || null;
  }

  onChangeEditor({ editor }: ChangeEvent ) {
    this.formData.description = editor.getData();
  }

  openFile(event) {
    const files = event.target.files;

    if (typeof files[0] !== 'object') return false;
    else {
      this.dataService.resizePhoto(files[0], 900, 'dataURL',  (resizedFile) => {
        this.formData.picture = resizedFile;
      });
    }
  }

  validate() {
    const { title, description, urlVideo } = this.formData;

    if (!checkTitlesOrDescriptions(title)) return 'Disculpe, pero debe indicar un título correcto.';
    if (description?.length < 10) return 'Disculpe, pero debe indicar una descripción correct.';
    if (urlVideo && !checkYoutubeUrl(urlVideo)) return 'Disculpe, pero la URL de Youtube es incorrecta.';

    return null;
  }

  async confirmCancel() {
    await this.globalSer.alertConfirm({
      header: 'Confirme',
      message: '¿Está seguro qué desea salir del formulario?',
      confirmAction: () => {
        if (!!this.handleCancel) this.handleCancel();
      }
    });
  }

  async confirmSave() {
    const validated = this.validate();
    if (validated)
      await this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe completar el formulario.');
    else {
      await this.globalSer.alertConfirm({
        header: 'Confirme',
        message: '¿Está seguro qué desea guardar los datos de este devocional?',
        confirmAction: () => {
          if (this.data) this.update();
          else this.save();
        }
      });
    }
  }

  modelToSendForm(): any {
    return {
      title: `${this.formData.title}`.trim(),
      description: `${this.formData.description}`.trim(),
      urlVideo: this.formData.urlVideo ? `${this.formData.urlVideo}`.trim() : null,
      picture: this.formData.picture ? `${this.formData.picture}`.trim() : null,
    };
  }
}
