import {Component, Input, OnInit} from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {CursosService} from '../../cursos.service';
import {GlobalService} from '../../../../services/global.service';

@Component({
  selector: 'app-modal-editar-pregunta',
  templateUrl: './modal-editar-pregunta.page.html',
  styleUrls: ['./modal-editar-pregunta.page.scss'],
})
export class ModalEditarPreguntaPage implements OnInit {

  @Input() data: any;

  id: string|null = null;
  themeId: string|null = null;
  questionId: string|null = null;
  titleModal = 'Agregar pregunta';
  inputsList = [];
  word: string|null = null;

  formData: any = {
    title: null,
    description: null,
    placeholder: null,
    extra: null,
    inputType: null,
    require: true,
    values: [],
    correctAnswer: null,
  };

  constructor(
    private alertCtrl: AlertController,
    private globalSer: GlobalService,
    private modalCtrl: ModalController,
    private cursosService: CursosService
  ) {
    this.inputsList = this.cursosService.inputTypeList;
  }

  ngOnInit() {
    if (this.data) {
      // set title
      if (this.data.title) this.titleModal = `Editar: ${this.data.title}`;

      // set principal params
      this.id = this.data.id;
      this.themeId = this.data.themeId;
      this.questionId = this.data.questionId;

      // set data
      this.formData.title = this.data.title;
      this.formData.description = this.data.description;
      this.formData.placeholder = this.data.placeholder;
      this.formData.extra = this.data.extra;
      this.formData.inputType = this.data.inputType;
      this.formData.require = this.data.require;
      this.formData.values = this.data.values;
      this.formData.correctAnswer = this.data.correctAnswer;
    }

  }

  closeModal(data: any = null) {
    this.modalCtrl.dismiss(data);
  }

  /*
    actions service
   */

  async addQuestion() {
    await this.globalSer.presentLoading();
    const add: any = await this.cursosService.addQuestionTestThemeCourse(this.id, this.themeId, this.formData);

    if (add && !add.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('Alerta', 'Se ha agregado el pregunta exitosamente.');
      this.closeModal(add);
    }
    else if (add && add.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async updateQuestion() {
    await this.globalSer.presentLoading();
    const updated: any = await this.cursosService.updateQuestionTestThemeCourse(this.id, this.themeId, this.questionId, this.formData);

    if (updated && !updated.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('Alerta', 'Se ha actualizado la pregunta exitosamente.');
      this.closeModal(updated);
    }
    else if (updated && updated.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  /*
    Actions forms
   */
  getInputTypeLabel(inputType: string|null) {
    if (!inputType) return null;
    const input = this.inputsList.find(i => i.val === inputType);
    if (input) return input.label;
    return null;
  }

  addValuesInList() {
    if (this.word) this.formData.values.push(this.word);
    this.word = null;
  }

  enableButtonSave() {
    const val1 = [null, ''];
    const val2 = ['text', 'textarea'];
    let counter = 0;

    if (val1.indexOf(this.formData.title) > -1) counter += 1;
    if (val1.indexOf(this.formData.inputType) > -1) counter += 1;
    if (
      val2.indexOf(this.formData.inputType) === -1
      && (this.formData.values.length === 0 || val1.indexOf(this.formData.correctAnswer) > -1)
    ) counter += 1;

    return counter > 0;
  }

  removeValueOfList(index: number) {
    this.formData.values.splice(index, 1);
    this.formData.correctAnswer = null;
    this.word = null;
  }

  async showInputsListAlert() {
    const inputs: any = [];
    for (const value of this.inputsList) {
      inputs.push({
        name: `input-type`,
        type: 'radio',
        label: value.label,
        value: value.val,
        checked: this.formData.inputType === value.val,
      });
    }

    await this.globalSer.alertWithList({
      header: 'Tipo de campo',
      inputs,
      confirmAction: (selectedValue) => {
        if (['text', 'textarea'].indexOf(selectedValue) > -1 ) {
          this.formData.values = [];
          this.formData.placeholder = null;
          this.formData.correctAnswer = null;
        }
        this.formData.inputType = selectedValue;
      }
    });
  }

  async showRequireAlert() {
    const inputs: any = [];
    for (const value of [true, false]) {
      inputs.push({
        name: `require`,
        type: 'radio',
        label: value ? 'Si' : 'No',
        value,
        checked: value === this.formData.require,
      });
    }

    await this.globalSer.alertWithList({
      header: '¿Respuesta obligatoria?',
      inputs,
      confirmAction: (selectedValue) => { this.formData.require = selectedValue; }
    });
  }

  async confirmEdit() {
    const validated = this.cursosService.validationEdit('question', this.formData);

    if (!validated) {
      await this.globalSer.alertConfirm({
        header: 'Confirme',
        message: `¿Está seguro qué desea ${this.questionId ? 'actualizar' : 'agregar'} este pregunta?`,
        confirmAction: () => {
          if (this.themeId && this.questionId) this.updateQuestion();
          else this.addQuestion();
        }
      });
    }
    else {
      await this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe completar el formulario.');
    }
  }

}