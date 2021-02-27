import {Component, Input, OnInit} from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {CursosService} from '../../cursos.service';
import {GlobalService} from '../../../../services/global.service';

@Component({
  selector: 'app-modal-cursos-previos',
  templateUrl: './modal-cursos-previos.page.html',
  styleUrls: ['./modal-cursos-previos.page.scss'],
})
export class ModalCursosPreviosPage implements OnInit {

  @Input() id: string|null = null;
  @Input() listIdsIgnore: any = [];
  queryParams: any = {
    input: 'title',
    value: 1,
    page: 1,
    limit: 25,
    ignoreIds: [],
    title: null
  };

  courses: any = [];
  listAdded: string[] = [];
  listAddedObjs: any = [];
  totals = 0;
  pages = 0;
  page = 1;

  handleAddOrRemove = (id: string) => { this.addOrRemoveId(id); };

  constructor(
    private alertCtrl: AlertController,
    private globalSer: GlobalService,
    private modalCtrl: ModalController,
    private cursosService: CursosService
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    if (this.listIdsIgnore) this.queryParams.ignoreIds = this.listIdsIgnore.toString();
    await this.getTotals();
  }

  closeModal(data: any = null) {
    this.modalCtrl.dismiss(data);
  }

  async getTotals() {
    this.totals = 0;
    this.pages = 0;
    const totals: any = await this.cursosService.getCoursesTotals(this.queryParams);

    if (!!totals && totals >= 0 && !totals.error) {
      this.totals = totals;
      this.pages = this.globalSer.getPagination(totals, this.queryParams.limit);

      if (totals > 0) await this.getCoursesList();
      else {
        this.queryParams.page = 1;
        this.pages = 0;
        this.courses = [];
      }
    }
    else if (!!totals && totals.error) {
      this.queryParams.page = 1;
      this.pages = 0;
      this.courses = [];
      if (totals.status && totals.status === 401) {
        await this.globalSer.presentAlert('Alerta', 'Disculpe, pero no se encontró una sesión activa.');
        this.closeModal();
      }
    }
    else {
      this.queryParams.page = 1;
      this.pages = 0;
      this.courses = [];
    }
  }

  async getCoursesList() {
    // if (this.showFilter) this.showFilter = false;
    await this.globalSer.presentLoading();
    const data: any = await this.cursosService.getCourses(this.queryParams);

    if (data && !data.error) {
      this.courses = data;
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async addCourses() {
    await this.globalSer.presentLoading();
    const added: any = await this.cursosService.addLevelCourse(this.id, { listIds: this.listAdded });

    if (added && !added.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', added || 'Se ha cambiado la imagen el curso exitosamente.');
      await this.closeModal(this.listAddedObjs);
    }
    else if (added && added.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  // actions
  addOrRemoveId(id: string) {
    const index = this.listAdded.indexOf(id);
    if (index === -1) {
      const course = this.courses.find(c => c._id === id);
      if (course) {
        this.listAdded.push(id);
        this.listAddedObjs.push(course);
      }
    }
    else {
      this.listAdded.splice(index, 1);
      this.listAddedObjs.splice(index, 1);
    }
  }

  checkAddedId(id: string) {
    return this.listAdded.indexOf(id) > -1;
  }

  // query actions
  async findData() {
    this.queryParams.page = 1;
    this.pages = 0;
    this.courses = null;
    await this.getTotals();
  }

  async setSortOrder() {
    this.queryParams.value = this.queryParams.value === 1 ? -1 : 1;
    this.queryParams.page = 1;
    this.courses = null;
    await this.getCoursesList();
  }

  async setQueryValues() {
    const alert = await this.alertCtrl.create({
      header: 'Cursos por página',
      inputs: [
        {
          name: `results-per-page`,
          type: 'radio',
          label: `5`,
          value: 5,
          checked: this.queryParams.limit === 5,
        },
        {
          name: `results-per-page`,
          type: 'radio',
          label: `10`,
          value: 10,
          checked: this.queryParams.limit === 10,
        },
        {
          name: `results-per-page`,
          type: 'radio',
          label: `25`,
          value: 25,
          checked: this.queryParams.limit === 25,
        },
        {
          name: `results-per-page`,
          type: 'radio',
          label: `50`,
          value: 50,
          checked: this.queryParams.limit === 50,
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        },
        {
          text: 'Ok',
          handler: (selectedValue) => {
            this.queryParams.limit = selectedValue;
            this.queryParams.page = 1;
            this.pages = this.globalSer.getPagination(this.totals, this.queryParams.limit);
            this.courses = null;
            this.getCoursesList();
          }
        }
      ]
    });
    await alert.present();
  }

  async confirmAdd() {
    let showConfirm = true;

    if (this.listAdded.length === 0) {
      await this.globalSer.presentAlert('Alerta', 'Disculpe, pero debe seleccionar al menos un curso.');
      showConfirm = false;
    }

    let message = '¿Está seguro qué desea agregar los siguientes cursos al listado?<br>';
    this.listAddedObjs.forEach(a => {
      message += `<br>- <b>${a.title}.</b>`;
    });


    if (showConfirm) {
      const alert = await this.alertCtrl.create({
        cssClass: 'max-width-640',
        header: 'Confirme',
        message,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {}
          }, {
            text: 'Sí',
            handler: () => {
              this.addCourses();
            }
          }
        ]
      });
      await alert.present();
    }
  }

}
