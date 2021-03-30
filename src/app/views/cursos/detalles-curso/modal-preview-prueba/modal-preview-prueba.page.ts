import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {GlobalService} from '../../../../services/global.service';

@Component({
  selector: 'app-modal-preview-prueba',
  templateUrl: './modal-preview-prueba.page.html',
  styleUrls: ['./modal-preview-prueba.page.scss'],
})
export class ModalPreviewPruebaPage implements OnInit {
  @Input() test: any = [];
  @Input() title: string|null = null;
  @Input() description: string|null = null;
  titleModal = 'Cargando ...';
  totalsViews = 0;
  viewSelected = 0;
  questions: any = [];
  questionsView: any = null;
  questionsModel: any = {};

  constructor(
    private globalSer: GlobalService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    if (this.title) this.titleModal = `Previsualizando prueba: ${this.title}`;
    this.setSectionsQuestions();
  }

  async close() {
    await this.modalController.dismiss();
  }

  setSectionsQuestions() {
    const totals = this.test.length;
    // const totalSeparations = totals > 0 ? totals / 2 : 0;
    this.totalsViews = this.globalSer.getPagination(totals, 2);

    for (let i = 0; i < this.totalsViews; i++) {
      const jump = i === 0 ? 0 : i * 2;
      const selected = this.test.slice(jump, jump + 2);
      this.questions.push(selected);
    }

    for (let j = 0; j < totals; j++) {
      if (this.test[j].inputType === 'checkbox'){
        this.questionsModel[`${this.test[j]._id}`] = []; // create a new value with Question ID
        // set data with the new object
        this.test[j].values.forEach(v => {
          this.questionsModel[`${this.test[j]._id}`].push({
            val: v,
            isChecked: false
          });
        });
      }
      else this.questionsModel[`${this.test[j]._id}`] = null;
    }

    if (this.totalsViews > 0) {
      this.totalsViews = this.totalsViews - 1;
      if (!!this.questions[0]) this.questionsView = this.questions[0];
    }
  }


  checkAnswerSections(view: number): boolean {
    // check required answer
    const totals = this.questions[view].length;
    let showMsg = false;

    for (let i = 0; i < totals; i++) {
      if (this.questions[view][i].require) {
        if (this.questions[view][i].inputType === 'checkbox'){
          const answered = this.questionsModel[this.questions[view][i]._id].filter(a => a.isChecked);
          showMsg = answered.length === 0;
        }
        else showMsg = this.questionsModel[this.questions[view][i]._id] === null;
      }
      if (showMsg) break;
    }

    return showMsg;
  }

  async getQuestionsFromList(next = false) {
    this.viewSelected += next ? 1 : -1;
    this.questionsView = this.questions[this.viewSelected] || null;
  }
}
