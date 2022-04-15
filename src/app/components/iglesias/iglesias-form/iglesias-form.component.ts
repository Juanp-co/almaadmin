import {Component, Input, OnInit} from '@angular/core';
import {GlobalService} from '../../../services/global.service';
import {staticCoords} from '../../../../Utils/data.static';
import {DataService} from '../../../services/data.service';
import {onlyNumbersInputValidation} from '../../../../Utils/validations.functions';

@Component({
  selector: 'app-iglesias-form',
  templateUrl: './iglesias-form.component.html',
  styleUrls: ['./iglesias-form.component.scss'],
})
export class IglesiasFormComponent implements OnInit {

  @Input() data;
  @Input() handleCancel: () => void;
  @Input() handleSave: (formData: any) => void;

  formData: any = {
    _id: null,
    name: null,
    description: null,
    picture: null,
    address: null,
    phone1: null,
    phone2: null,
    location: {
      type: 'Point',
      coordinates: staticCoords
    }
  };

  constructor(
    private dataService: DataService,
    private globalSer: GlobalService,
  ) {}

  ngOnInit() {
    if (this.data) {
      this.formData = { ...this.formData, ...this.data };
    }
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

  getParamsToMap() {
    return [
      {
        type: 'Feature',
        geometry: this.formData.location
      }
    ];
  }

  setFormData(input: string, ev: any) {
    this.formData[input] = ev?.target?.value?.toUpperCase() || null;
  }

  validateOnlyNumber(event: any) {
    onlyNumbersInputValidation(event);
  }

  setCoordinates(coords: number[] = []) {
    this.formData.location.coordinates = coords;
  }

  validateData(data) {
    if (!data.name) return 'Disculpe, pero debe indicar el nombre de la iglesia.';
    if (!data.description) return 'Disculpe, pero debe indicar el resumen para la iglesia.';
    if (!data.address) return 'Disculpe, pero debe indicar la dirección de la iglesia.';
    if (data?.phone1?.length < 4) return 'Disculpe, pero debe indicar un número de teléfono principal válido.';
    if (data?.phone2 && data?.phone2?.length < 4) return 'Disculpe, pero debe indicar un número de teléfono opcional válido.';
    if (!data.picture) return 'Disculpe, pero debe seleccionar una imagen para la iglesia.';
    return null;
  }

  async confirmAction() {
    const validated = this.validateData(this.formData);

    if (validated) await this.globalSer.presentAlert('Alerta', validated);
    else {
      await this.globalSer.alertConfirm({
        header: 'Confirme',
        message: `¿Está seguro qué desea ${this.data?._id ? 'actualizar' : 'crear'} esta iglesia?`,
        confirmAction: () => this.handleSave(this.formData)
      });
    }
  }

  handleUpdateCoords = (coords: number[]): void => this.setCoordinates(coords);

}
