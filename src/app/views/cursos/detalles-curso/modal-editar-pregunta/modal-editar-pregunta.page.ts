import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
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
  quiz: any[] = [];
  quizViews: boolean[] = [];
  showInfoForm = true;
  titleModal = 'Agregar pregunta';
  inputsList = [];
  word: string|null = null;

  Editor = ClassicEditor;
  configEditor: any = null;

  formData: any = {
    title: null,
    description: null,
  };

  constructor(
    private globalSer: GlobalService,
    private modalCtrl: ModalController,
    private cursosService: CursosService
  ) {
    this.inputsList = this.cursosService.inputTypeList;
    this.configEditor = this.globalSer.configEditor;
  }

  ngOnInit() {
    if (this.data) {
      // set title
      if (this.data.title) this.titleModal = `Editar: ${this.data.title}`;

      this.formData.title = this.data.title;
      this.formData.description = this.data.description;

      // set principal params
      this.id = this.data.id;
      this.themeId = this.data.themeId;
      this.quiz = [...this.data.quiz] || [];

      if (this.quiz.length > 0) this.quiz.forEach(_ => { this.quizViews.push(false); });
    }

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

  setShowView(index) {
    this.quizViews[index] = !this.quizViews[index];
  }

  setShowInfoView() {
    this.showInfoForm = !this.showInfoForm;
  }

  addItem() {
    this.quiz.push({
      title: null,
      description: null,
      placeholder: null,
      extra: null,
      inputType: null,
      require: true,
      values: [],
      correctAnswer: null,
    });
    this.quizViews.push(true);
  }

  async removeItem(index) {
    await this.globalSer.alertConfirm({
      header: 'Confirme',
      message: '¿Está seguro qué desea quitar esta pregunta?',
      confirmAction: () => {
        this.quiz.splice(index, 1);
        this.quizViews.splice(index, 1);
      }
    });
  }

  /*
    actions service
   */

  async addQuestion() {
    await this.globalSer.presentLoading();
    const data = {
      title: this.formData.title,
      description: this.formData.description,
      urlVideo: this.formData.description,
      quiz: this.quiz,
    };
    const add: any = await this.cursosService.createThemeCourse(this.id, data);

    if (add && !add.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('Alerta', 'Se ha agregado el Quiz exitosamente.');
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
    const data = {
      title: this.formData.title,
      description: this.formData.description,
      urlVideo: this.formData.description,
      quiz: this.quiz,
    };
    const updated: any = await this.cursosService.updateThemeCourse(this.id, this.themeId, data);

    if (updated && !updated.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('Alerta', 'Se ha actualizado el Quiz exitosamente.');
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

  addValuesInList(index: number) {
    if (this.word) this.quiz[index].values.push(this.word);
    this.word = null;
  }

  removeValueOfList(elem: number, index: number) {
    if (!!this.quiz[elem]) {
      this.quiz[elem].values.splice(index, 1);
      this.quiz[elem].correctAnswer = null;
    }
    this.word = null;
  }

  enableButtonSave() {
    const val1 = [null, ''];
    let counter = 0;

    if (val1.indexOf(this.formData.title) > -1) counter += 1;
    // if (val1.indexOf(this.formData.description) > -1) counter += 1;
    if (this.quiz.length === 0) counter += 1;

    return counter > 0;
  }

  async showInputsListAlert(index: number) {
    const inputs: any[] = [];
    for (const value of this.inputsList) {
      inputs.push({
        name: `input-type`,
        type: 'radio',
        label: value.label,
        value: value.val,
        checked: this.quiz[index].inputType === value.val,
      });
    }

    await this.globalSer.alertWithList({
      header: 'Tipo de campo',
      inputs,
      confirmAction: (selectedValue) => {
        if (['text', 'textarea'].indexOf(selectedValue) > -1 ) {
          this.quiz[index].values = [];
          this.quiz[index].placeholder = null;
          this.quiz[index].correctAnswer = null;
        }
        this.quiz[index].inputType = selectedValue;
      }
    });
  }

  async showRequireAlert(index) {
    const inputs: any[] = [];
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
      confirmAction: (selectedValue) => { this.quiz[index].require = selectedValue; }
    });
  }

  async confirmEdit() {
    const validated = this.cursosService.validationEdit('question', {...this.formData, quiz: this.quiz});

    if (!validated) {
      await this.globalSer.alertConfirm({
        header: 'Confirme',
        message: `¿Está seguro qué desea ${this.themeId ? 'actualizar' : 'agregar'} este Quiz?`,
        confirmAction: () => {
          if (this.themeId) this.updateQuestion();
          else this.addQuestion();
        }
      });
    }
    else {
      await this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe completar el formulario.');
    }
  }

}
