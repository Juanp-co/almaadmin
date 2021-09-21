import {Component, Input, OnInit} from '@angular/core';
import {staticCoords} from '../../../../Utils/data.static';
import {checkIfValueIsNumber, checkTitlesOrDescriptions, onlyNumbersInputValidation2} from '../../../../Utils/validations.functions';
import {GlobalService} from '../../../services/global.service';

@Component({
  selector: 'app-family-group-form',
  templateUrl: './family-group-form.component.html',
  styleUrls: ['./family-group-form.component.scss'],
})
export class FamilyGroupFormComponent implements OnInit {

  @Input() data: any = null;
  @Input() handleCancel: () => void;
  @Input() handleSave: (formData: any) => void;

  formData: any = {
    sector: null,
    subSector: null,
    number: null,
    direction: null,
    location: {
      type: 'Point',
      coordinates: staticCoords
    }
  };

  constructor(
    private globalSer: GlobalService
  ) { }

  ngOnInit() {
    if (this.data) {
      this.formData.sector = this.data.sector || null;
      this.formData.subSector = this.data.subSector || null;
      this.formData.number = this.data.number || null;
      this.formData.direction = this.data.direction?.length > 150 ? this.data.direction.substr(0, 150) : (this.data.direction || null);
      this.formData.location = this.data.location || {
        type: 'Point',
        coordinates: staticCoords
      };
    }
  }

  validateOnlyNumber(event: any) {
    onlyNumbersInputValidation2(event);
  }

  setFormData(input: string, ev: any) {
    this.formData[input] = ev?.target?.value || null;
  }

  setCoordinates(coords: number[] = []) {
    this.formData.location.coordinates = coords;
  }

  // validate
  validateData(formData: any): string|null {
    if (!checkIfValueIsNumber(`${formData.sector}`)) return 'Disculpe, pero debe indicar número del sector.';
    if (!checkIfValueIsNumber(`${formData.subSector}`)) return 'Disculpe, pero debe indicar el número del sub-sector.';
    if (!checkIfValueIsNumber(`${formData.number}`)) return 'Disculpe, pero debe indicar el número del grupo.';
    if (!checkTitlesOrDescriptions(formData.direction)) return 'Disculpe, pero debe indicar una dirección.';
    return null;
  }

  async confirmCancel() {
    await this.globalSer.alertConfirm({
      header: 'Confirme',
      message: '¿Está seguro qué desea salir del formulario?',
      confirmAction: () => this.handleCancel()
    });
  }

  async confirmAction() {
    const validated = this.validateData(this.formData);

    if (validated) await this.globalSer.presentAlert('Alerta', validated);
    else {
      await this.globalSer.alertConfirm({
        header: 'Confirme',
        message: '¿Está seguro qué desea guardar la información del formulario?',
        confirmAction: () => this.handleSave(this.formData)
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

  handleUpdateCoords = (coords: number[]): void => this.setCoordinates(coords);

}
