import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController, NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {AxiosService} from '../../../services/axios.service';
import {GlobalService} from '../../../services/global.service';
import {CursosService} from '../cursos.service';
import {DataService} from '../../../services/data.service';
import {setSaltLinesOrBr} from '../../../../Utils/validations.functions';
import {ModalEditarTemaPage} from './modal-editar-tema/modal-editar-tema.page';
import {ModalPreviewTemaPage} from './modal-preview-tema/modal-preview-tema.page';
import {ModalEditarContenidoPage} from './modal-editar-contenido/modal-editar-contenido.page';
import {ModalEditarPreguntaPage} from './modal-editar-pregunta/modal-editar-pregunta.page';
import {ModalPreviewPruebaPage} from './modal-preview-prueba/modal-preview-prueba.page';
import {ModalCursosPreviosPage} from './modal-cursos-previos/modal-cursos-previos.page';

@Component({
  selector: 'app-detalles-curso',
  templateUrl: './detalles-curso.page.html',
  styleUrls: ['./detalles-curso.page.scss'],
})
export class DetallesCursoPage implements OnInit {
  roles: string[] = [];
  title = 'Cargando...';

  id: any = null;

  staticData: any = null;
  course: any = null;

  edit = false;
  editBanner = false;
  banner: string|null = null;
  totalsUsers = 0;
  views: any = {
    info: {
      show: true,
      edit: false,
      title: 'Información del curso',
      data: {
        title: null,
        description: null,
        toRoles: null,
        speaker: null,
        speakerPosition: null,
      }
    },
    temary: { show: false, title: 'Temas', data: [] },
    test: { show: false, title: 'Pruebas', data: [] },
    levels: { show: false, title: 'Cursos previos requeridos', data: [] },
    publish: { show: false, title: 'Publicar curso', enable: false },
  };
  formData: any = {
    temary: { show: false, title: 'Temas del curso' },
    test: { show: false, title: 'Pruebas' },
    levels: { show: false, title: 'Niveles previos al curso' },
  };
  formDataInfo = null;

  constructor(
    private activateRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    private axios: AxiosService,
    private dataService: DataService,
    private globalSer: GlobalService,
    private cursosService: CursosService,
    private modalController: ModalController,
    private navCtrl: NavController,
    private router: Router,
  ) {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/ingresar']);
    else {
      this.roles = this.cursosService.roles;
    }
  }

  async ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    await this.globalSer.presentLoading();
    const data: any = await this.cursosService.getCourse(this.id);

    if (data && !data.error) {
      this.staticData = {...data};
      this.course = {...this.staticData};
      this.banner = this.course.banner;
      if (this.banner) {
        this.staticData.banner = this.banner;
        this.course.banner = this.course;
      }
      this.views.publish.enable = this.course.enable;
      this.totalsUsers = this.course.totalsUsers || 0;
      this.setDataToView('info', this.course);
      this.setDataToView('temary', this.course.temary);
      this.setDataToView('test', this.course.temary);
      this.setDataToView('levels', this.course.levels);
      this.title = `Detalles: ${this.course.title}`;
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async ionViewWillEnter() {
    if (!this.globalSer.checkSession())
      this.router.navigate(['/ingresar']);
  }

  async back() {
    await this.navCtrl.back();
  }

  // actions services
  async updateCourse(data: any) {
    await this.globalSer.presentLoading();
    const updated: any = await this.cursosService.updateCourse('info', this.id, data);

    if (updated && !updated.error) {
      this.staticData = {...this.staticData, ...updated};
      this.course = {...this.staticData};
      this.setDataToView('info', updated);
      this.views.info.edit = false;
      this.title = `Detalles: ${this.course.title}`;
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado el curso exitosamente.');
    }
    else if (updated && updated.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async deleteCourse() {
    await this.globalSer.presentLoading();
    const deleted: any = await this.cursosService.deleteCourse(this.id);

    if (deleted && !deleted.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', deleted || 'Se ha eliminado toda la información del curso exitosamente.');
      this.back();
    }
    else if (deleted && deleted.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async updateBanner(banner: string) {
    await this.globalSer.presentLoading();
    const updated: any = await this.cursosService.updateBannerCourse(this.id, { banner });

    if (updated && !updated.error) {
      this.banner = updated;
      if (this.banner) {
        this.staticData.banner = this.banner;
        this.course.banner = this.banner;
      }
      this.editBanner = false;
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', 'Se ha cambiado la imagen el curso exitosamente.');
    }
    else if (updated && updated.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async deleteTheme(themeId: string) {
    await this.globalSer.presentLoading();
    const deleted: any = await this.cursosService.deleteThemeCourse(this.id, themeId);

    if (deleted && !deleted.error) {
      this.staticData.temary = this.staticData.temary.filter(c => c._id !== themeId);
      this.course = this.staticData;
      this.setDataToView('temary', this.staticData.temary);
      this.setDataToView('test', this.staticData.temary);
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', deleted || 'Se ha eliminado el tema y su contenido exitosamente.');

    }
    else if (deleted && deleted.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async deleteContent({themeId, contentId, index1}) {
    await this.globalSer.presentLoading();
    const deleted: any = await this.cursosService.deleteContentThemeCourse(this.id, themeId, contentId);

    if (deleted && !deleted.error) {
      this.staticData.temary[index1].content = this.staticData.temary[index1].content.filter(c => c._id !== contentId);
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', 'Se ha eliminado el contenido del tema exitosamente.');
    }
    else if (deleted && deleted.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async deleteQuestion({themeId, questionId, index1}) {
    await this.globalSer.presentLoading();
    const deleted: any = await this.cursosService.deleteQuestionTestThemeCourse(this.id, themeId, questionId);

    if (deleted && !deleted.error) {
      this.staticData.temary[index1].test = this.staticData.temary[index1].test.filter(c => c._id !== questionId);
      this.course.temary[index1].test = this.course.temary[index1].test.filter(c => c._id !== questionId);
      this.views.test.data[index1].test = this.views.test.data[index1].test.filter(c => c._id !== questionId);
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', 'Se ha eliminado la pregunta exitosamente.');

    }
    else if (deleted && deleted.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async deleteLevel(levelId: string) {
    await this.globalSer.presentLoading();
    const deleted: any = await this.cursosService.deleteLevelCourse(this.id, levelId);

    if (deleted && !deleted.error) {
      this.staticData.levels = this.staticData.levels.filter(l => l._id !== levelId);
      this.course.levels = this.course.levels.filter(l => l._id !== levelId);
      this.views.levels.data = this.views.levels.data.filter(l => l._id !== levelId);
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', deleted || 'Se ha removido el curso del listado exitosamente.');

    }
    else if (deleted && deleted.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async publishCourse() {
    await this.globalSer.presentLoading();
    const data: any = await this.cursosService.publishCourse(this.id);

    if (data && !data.error) {
      this.staticData.enable = data.enable;
      this.course.enable = data.enable;
      this.views.publish.enable = data.enable;
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert(
        '¡Éxito!',
        data.enable ? 'Se ha publicado el curso exitosamente.' : 'Se ha retirado el curso de la sección pública exitosamente.'
      );
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  // views actions
  setShowView(input: string) {
    this.views[input].show = !this.views[input].show;
  }

  setShowEditInfo(group: string) {
    if (this.views[group].edit) {
      this.formDataInfo = null;
      this.views[group].edit = false;
    }
    else {
      this.formDataInfo = {...this.views.info.data};
      this.views[group].edit = true;
    }
  }

  setShowBannerEdit() {
    this.editBanner = !this.editBanner;
  }

  // getters and setters

  setDataToView(group: string, data: any = []) {
    if (group === 'info') {
      const keys = Object.keys(this.views[group].data);
      keys.forEach(k => {
        if (k === 'description')
          this.views[group].data[k] = setSaltLinesOrBr(data[k], true);
        else
          this.views[group].data[k] = data[k];
      });
    }
    else if (['levels', 'temary'].indexOf(group) > -1) {
      this.views[group].data = data || [];
    }
    else if (group === 'test') {
      this.views[group].data = data ? data.map(d => {
        return {
          _id: d._id,
          title: d.title,
          test: d.test,
        };
      }) : [];
    }
  }

  // getters and setters
  getRoles(roles: number[]): string {
    return this.cursosService.getRoles(roles);
  }

  /*
   Information, banner and delete actions
    */

  async confirmCourseDelete() {
    await this.globalSer.alertConfirm({
      message: `¿Está seguro qué desea eliminar este curso?<br/><br/>NOTA: Se eliminará toda la información registrada. Este paso es irreversible.`,
      confirmAction: () => this.deleteCourse()
    });
  }

  /*
  Content of theme actions
   */
  async modalTheme(themeId: string|null = null) {
    const updateData = (data: any) => {
      if (data) {
        const index = this.views.temary.data.findIndex(d => d._id === themeId);
        if (index > -1) {
          this.views.temary.data[index].title = data.title;
          this.views.temary.data[index].description = data.description;
        }
        else {
          this.staticData.temary.push(data);
          this.views.test.data.push({
            _id: data._id,
            title: data.title,
            test: data.test,
          });
        }
      }
    };
    const content = {
      id: this.id,
      themeId,
      title: null,
      description: null,
    };
    let openModal = true;

    if (themeId) {
      const theme = this.views.temary.data.find(d => d._id === themeId);

      if (theme) {
        content.title = theme.title;
        content.description = theme.description;
      }
      else {
        await this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener el tema a editar.');
        openModal = false;
      }
    }

    if (openModal) {
      await this.globalSer.loadModal(ModalEditarTemaPage, content, false, updateData);
    }
  }

  async modalPreviewTheme(themeId: string, contentId: string|null = null) {
    const data = {
      contentView: false,
      theme: null,
      content: null,
    };

    let openModal = false;

    if (themeId && !contentId) {
      const index = this.views.temary.data.findIndex(d => d._id === themeId);

      if (index > -1) {
        data.theme = this.views.temary.data[index];
        openModal = true;
      }
      else
        await this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener el tema.');
    }
    else if (themeId && contentId) {
      const index = this.views.temary.data.findIndex(d => d._id === themeId);

      if (index > -1) {
        const index2 = this.views.temary.data[index].content.findIndex(c => c._id === contentId);

        if (index2 > -1) {
          data.content = this.views.temary.data[index].content[index2];
          data.contentView = true;
          openModal = true;
        }
        else
          await this.globalSer.presentAlert(
            'Alerta',
            'Disculpe, ha ocurrido un error al momento de obtener el contenido a mostrar.'
          );
      }
      else
        await this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener el tema.');
    }
    else
      await this.globalSer.presentAlert('Alerta', 'Disculpe, pero la acción es inválida.');

    if (openModal) {
      await this.globalSer.loadModal(ModalPreviewTemaPage, { infoToShow: data }, false);
    }
  }

  async deleteThemeConfirm(themeId: string) {
    let showConfirm = true;
    const index1 = this.views.temary.data.findIndex(d => d._id === themeId);

    if (index1 === -1) {
      await this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener los datos.');
      showConfirm = false;
    }

    if (showConfirm) {
      await this.globalSer.alertConfirm({
        message: '¿Está seguro qué desea eliminar este tema?<br/><br/>NOTA: Se eliminará todo el contenido que este posea.',
        confirmAction: () => this.deleteTheme(themeId)
      });
    }
  }

  async modalEditContent(themeId: string, contentId: string|null = null) {
    const updateData = (data: any) => {
      if (data) {
        if (themeId && contentId) {
          this.views.temary.data[index1].content[index2].title = data.title;
          this.views.temary.data[index1].content[index2].description = data.description;
          this.views.temary.data[index1].content[index2].urlVideo = data.urlVideo;
        }
        else {
          this.staticData.temary[index1].content.push(data);
        }
      }
    };
    const content = {
      id: this.id,
      themeId,
      contentId,
      title: null,
      description: null,
      urlVideo: null,
    };
    let openModal = true;
    const index1 = this.views.temary.data.findIndex(d => d._id === themeId);
    let index2 = -1;

    if (index1 > -1) {
      if (contentId) {
        index2 = this.views.temary.data[index1].content.findIndex(c => c._id === contentId);

        if (index2 > -1) {
          content.title = this.views.temary.data[index1].content[index2].title;
          content.description = this.views.temary.data[index1].content[index2].description;
          content.urlVideo = this.views.temary.data[index1].content[index2].urlVideo;
        }
        else {
          await this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener el contenido a editar.');
          openModal = false;
        }
      }
    }
    else {
      await this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener el tema a editar.');
      openModal = false;
    }

    if (openModal) {
      await this.globalSer.loadModal(ModalEditarContenidoPage, content, false, updateData);
    }
  }

  async deleteContentConfirm(themeId: string, contentId: string) {
    let showConfirm = true;
    const index1 = this.views.temary.data.findIndex(d => d._id === themeId);
    let index2 = -1;

    if (index1 > -1) {
      index2 = this.views.temary.data[index1].content.findIndex(c => c._id === contentId);

      if (index2 === -1) {
        await this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener el contenido a eliminar.');
        showConfirm = false;
      }
    }
    else {
      await this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener los datos.');
      showConfirm = false;
    }

    if (showConfirm) {
      await this.globalSer.alertConfirm({
        message: '¿Está seguro qué desea eliminar este contenido?',
        confirmAction: () => this.deleteContent({ themeId, contentId, index1 })
      });
    }
  }

  /*
  Questions
   */
  async modalPreviewTest(themeId: string) {
    const data = {
      title: null,
      test: null,
    };

    let openModal = false;

    if (themeId) {
      const index = this.views.test.data.findIndex(d => d._id === themeId);

      if (index > -1) {
        if (!this.views.test.data[index].test || this.views.test.data[index].test.length === 0)
          await this.globalSer.presentAlert(
            'Alerta',
            'Disculpe, pero la prueba a visualizar no contiene preguntas.'
          );
        else {
          data.test = this.views.test.data[index].test;
          data.title = this.views.test.data[index].title;
          openModal = true;
        }
      }
      else
        await this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener el tema.');
    }
    else
      await this.globalSer.presentAlert('Alerta', 'Disculpe, pero la acción es inválida.');

    if (openModal) await this.globalSer.loadModal(ModalPreviewPruebaPage, data, false);
  }

  async modalEditQuestion(themeId: string, questionId: string|null = null) {
    const updateData = (data: any) => {
      if (data) {
        if (themeId && questionId) this.views.test.data[index1].test[index2] = data;
        else this.views.test.data[index1].test.push(data);
      }
    };
    const content = {
      id: this.id,
      themeId,
      questionId,
      title: null,
      description: null,
      placeholder: null,
      extra: null,
      inputType: false,
      require: true,
      values: [],
      correctAnswer: null,
    };
    let openModal = true;
    const index1 = this.views.test.data.findIndex(d => d._id === themeId);
    let index2 = -1;

    if (index1 > -1) {
      if (questionId) {
        index2 = this.views.test.data[index1].test.findIndex(c => c._id === questionId);

        if (index2 > -1) {
          content.title = this.views.test.data[index1].test[index2].title;
          content.description = this.views.test.data[index1].test[index2].description;
          content.placeholder = this.views.test.data[index1].test[index2].placeholder;
          content.extra = this.views.test.data[index1].test[index2].extra;
          content.inputType = this.views.test.data[index1].test[index2].inputType;
          content.require = this.views.test.data[index1].test[index2].require;
          content.values = this.views.test.data[index1].test[index2].values;
          content.correctAnswer = this.views.test.data[index1].test[index2].correctAnswer;
        }
        else {
          await this.globalSer.presentAlert(
            'Alerta',
            'Disculpe, ha ocurrido un error al momento de obtener el contenido a editar.'
          );
          openModal = false;
        }
      }
    }
    else {
      await this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener la información.');
      openModal = false;
    }

    if (openModal) {
      await this.globalSer.loadModal(ModalEditarPreguntaPage, { data: content }, false, updateData);
    }
  }

  async deleteQuestionConfirm(themeId: string, questionId: string) {
    let showConfirm = false;
    const index1 = this.views.test.data.findIndex(d => d._id === themeId);
    let index2 = -1;

    if (index1 > -1) {
      index2 = this.views.test.data[index1].test.findIndex(t => t._id === questionId);

      if (index2 > -1) showConfirm = true;
      else await this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener la pregunta a eliminar.');
    }
    else await this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener los datos.');

    if (showConfirm) {
      await this.globalSer.alertConfirm({
        message: '¿Está seguro qué desea eliminar esta pregunta?',
        confirmAction: () => this.deleteQuestion({ themeId, questionId, index1 })
      });
    }
  }

  /*
  Levels
   */
  async modalAddPreviousCourses() {
    const updateListLevels = (data: any) => {
      if (data && data.length > 0)
        this.views.levels.data = this.views.levels.data.concat(data);
    };
    const content = {
      id: this.id,
      listIdsIgnore: [],
    };

    // get ids registered
    content.listIdsIgnore = this.views.levels.data.map(l => l._id);

    await this.globalSer.loadModal(ModalCursosPreviosPage, content, false, updateListLevels);
  }

  async deleteLevelConfirm(levelId: string) {
    let showConfirm = true;
    const index1 = this.views.levels.data.findIndex(d => d._id === levelId);

    if (index1 === -1) {
      await this.globalSer.presentAlert(
        'Alerta',
        'Disculpe, pero no se ha encontrado en el listado el curso a remover.');
      showConfirm = false;
    }

    if (showConfirm) {
      await this.globalSer.alertConfirm({
        message: '¿Está seguro qué desea remover este curso del listado?',
        confirmAction: () => this.deleteLevel(levelId)
      });
    }
  }

  /*
  Publish
   */
  async confirmPublish() {
    const message = this.views.publish.enable ?
      '¿Está seguro qué desea quitar este curso de la sección pública?' +
      '<br><br>NOTA: Si algún usuario posee este curso en sus listados, este no podrá ser modificado.' :
      '¿Está seguro qué desea publicar este curso?<br><br>NOTA: Asegúrese que el contenido del curso esté completo.';

    await this.globalSer.alertConfirm({ message, confirmAction: () => this.publishCourse() });
  }

  // handles to components
  cancelEditInfo = (): void => { this.setShowEditInfo('info'); };
  saveEditInfo = (data: any): void => { this.updateCourse(data); };
  cancelEditBanner = (): void => { this.setShowBannerEdit(); };
  saveEditBanner = (data: string): void => { this.updateBanner(data); };
  showPreviewModal = (themeId: string, contentId: string|null = null): void => { this.modalPreviewTheme(themeId, contentId); };
  showEditTheme = (id: string): void => { this.modalTheme(id); };
  showEditContent = (themeId: string, contentId: string|null = null): void => { this.modalEditContent(themeId, contentId); };
  showDeleteConfirmTheme = (themeId: string): void => { this.deleteThemeConfirm(themeId); };
  showDeleteConfirmContent = (themeId: string, contentId: string): void => { this.deleteContentConfirm(themeId, contentId); };
  showPreviewTest = (themeId: string): void => { this.modalPreviewTest(themeId); };
  showEditQuestion = (themeId: string, questionId: string|null = null): void => { this.modalEditQuestion(themeId, questionId); };
  showDeleteConfirmQuestion = (themeId: string, questionId: string): void => { this.deleteQuestionConfirm(themeId, questionId); };
  showDeleteConfirmLevel = (levelId: string): void => { this.deleteLevelConfirm(levelId); };

}
