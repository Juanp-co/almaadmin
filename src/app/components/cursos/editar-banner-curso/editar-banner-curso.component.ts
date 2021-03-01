import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../../services/data.service';
import {GlobalService} from '../../../services/global.service';
import {CursosService} from '../../../views/cursos/cursos.service';

@Component({
  selector: 'app-editar-banner-curso',
  templateUrl: './editar-banner-curso.component.html',
  styleUrls: ['./editar-banner-curso.component.scss'],
})
export class EditarBannerCursoComponent implements OnInit {

  @Input() handleCancel: () => void;
  @Input() handleSave: (args: string) => void;
  @Input() banner: any = null;
  formData = {
    banner: null
  };

  constructor(
    private dataService: DataService,
    private globalSer: GlobalService,
    private cursosService: CursosService
  ) { }

  ngOnInit() {}

  cancel() {
    this.formData.banner = null;
    this.handleCancel();
  }

  save() {
    if (!this.formData.banner)
      this.globalSer.presentAlert('Alerta', 'Disculpe, pero debe indicar cargar una imagen.');
    else this.handleSave(this.formData.banner);
  }

  // actions form
  openFile(event) {
    const files = event.target.files;
    if (typeof files[0] !== 'object') return false;
    else {
      this.dataService.resizePhoto(files[0], 900, 'dataURL',  (resizedFile) => {
        this.formData.banner = resizedFile;
      });
    }
  }

  async confirmUpdateBanner() {
    const validated = this.cursosService.validationEdit('banner', this.formData.banner);

    if (!validated) {
      await this.globalSer.alertConfirm({
        message: '¿Está seguro qué desea cambiar la imagen del curso?',
        confirmAction: () => this.save()
      });
    }
    else await this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe seleccionar la nueva imagen.');
  }


}
