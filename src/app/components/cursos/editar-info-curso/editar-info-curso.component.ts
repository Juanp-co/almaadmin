import {Component, Input, OnInit} from '@angular/core';
import {CursosService} from '../../../views/cursos/cursos.service';
import {GlobalService} from '../../../services/global.service';
import {setSaltLinesOrBr} from '../../../../Utils/validations.functions';

@Component({
  selector: 'app-editar-info-curso',
  templateUrl: './editar-info-curso.component.html',
  styleUrls: ['./editar-info-curso.component.scss'],
})
export class EditarInfoCursoComponent implements OnInit {

  @Input() data: any;
  @Input() handleCancel: () => void;
  @Input() handleSave: (data: any) => void;

  formData: any = {
    title: null,
    description: null,
    toRoles: [],
    speaker: null,
    speakerPosition: null,
  };

  constructor(
    private cursosService: CursosService,
    private globalSer: GlobalService,
  ) {
  }

  ngOnInit() {
    if (this.data) {
      this.formData = {...this.formData, ...this.data};
      this.formData.description = setSaltLinesOrBr(this.formData.description);
    }
  }

  cancel() {
    if (!!this.handleCancel) this.handleCancel();
  }

  save() {
    if (!!this.handleSave) this.handleSave(this.formData);
  }

  setValue(input: string, event: any) {
    this.formData[input] = event.target.value;
  }

  // getters and setters
  getRoles(roles: number[]): string {
    return this.cursosService.getRoles(roles);
  }

  async showRoleListAlert(selected: any = []) {
    const inputs: any[] = [];

    for (const [i, value] of this.cursosService.roles.entries()) {
      inputs.push({
        name: `roles`,
        type: 'checkbox',
        label: value,
        value: i + 1,
        checked: selected.indexOf(i + 1) > -1,
      });
    }

    await this.globalSer.alertWithList({
      header: 'Seleccione los roles',
      inputs,
      confirmAction: (selectedValue) => {
        this.formData.toRoles = selectedValue;
      }
    });
  }

  async confirmEdit(group: string) {
    const validated = this.cursosService.validationEdit(group, this.formData);

    if (!validated) {
      await this.globalSer.alertConfirm({
        message: '¿Está seguro qué desea actualizar esta información?',
        confirmAction: () => this.save()
      });
    }
    else await this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe completar el formulario.');
  }

}
