import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {GlobalService} from '../../../services/global.service';
import {CursosService} from '../cursos.service';
import {setSaltLinesOrBr} from '../../../../Utils/validations.functions';
import {ModalPreviewTemaPage} from './modal-preview-tema/modal-preview-tema.page';
import {ModalEditarPreguntaPage} from './modal-editar-pregunta/modal-editar-pregunta.page';
import {ModalPreviewPruebaPage} from './modal-preview-prueba/modal-preview-prueba.page';
import {ModalEditarContenidoPage} from './modal-editar-contenido/modal-editar-contenido.page';

@Component({
  selector: 'app-detalles-curso',
  templateUrl: './detalles-curso.page.html',
  styleUrls: ['./detalles-curso.page.scss'],
})
export class DetallesCursoPage implements OnInit {
  title = 'Cargando...';

  id: any = null;

  staticData: any = null;
  course: any = null;

  edit = false;
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
        level: null,
      }
    },
    temary: { show: false, title: 'Temas', data: [] },
    publish: { show: false, title: 'Publicar curso', enable: false },
  };
  formData: any = {
    temary: { show: false, title: 'Temas del curso' },
    test: { show: false, title: 'Pruebas' },
  };
  showAddButton = false;
  formDataInfo = null;

  constructor(
    private activateRoute: ActivatedRoute,
    private cursosService: CursosService,
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private router: Router,
  ) {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/ingresar']);
  }

  async ngOnInit() {
    this.showAddButton = this.globalSer.checkRoleToEnableAddOrUpdate();
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    await this.globalSer.presentLoading();
    const data: any = await this.cursosService.getCourse(this.id);

    if (data && !data.error) {
      this.staticData = {...data};
      this.course = {...this.staticData};
      this.views.publish.enable = this.course.enable;
      this.totalsUsers = this.course.totalsUsers || 0;
      this.setDataToView('info', this.course);
      this.setDataToView('temary', this.course.temary);
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
      await this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado  la información del curso exitosamente.');
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

  // getters and setters

  setDataToView(group: string, data: any = []) {
    if (group === 'info') {
      const keys = Object.keys(this.views[group].data);
      keys.forEach(k => {
        this.views[group].data[k] = k === 'description' ? setSaltLinesOrBr(data[k], true) : data[k];
      });
    }
    else if (group === 'temary') {
      this.views[group].data = data || [];
    }
  }

  // getters and setters
  getRoles(roles: number[]): string {
    return this.cursosService.getRoles(roles);
  }

  /*
   Information and delete actions
    */

  async confirmCourseDelete() {
    await this.globalSer.alertConfirm({
      message: `¿Está seguro qué desea eliminar este curso?<br/><br/>
        <b>NOTA:</b> Se eliminará toda la información registrada.<br/><br/>
        <b><i>ESTA ACCIÓN ES IRREVERSIBLE</i></b>.`,
      confirmAction: () => this.deleteCourse()
    });
  }

  /*
  Content of theme actions
   */
  async modalTheme(themeId: string|null = null, quiz = false) {
    const updateData = (data: any) => {
      if (data) {
        const index = this.views.temary.data.findIndex(d => d._id === themeId);
        if (index > -1) {
          this.views.temary.data[index].title = data.title;
          this.views.temary.data[index].description = data.description;
          this.views.temary.data[index].urlVideo = data.urlVideo;
          this.views.temary.data[index].quiz = data.quiz;
        }
        else this.staticData.temary.push(data);
      }
    };

    if (themeId) {
      const theme = this.views.temary.data.find(d => d._id === themeId);

      if (theme) {
        if (quiz) {
          await this.globalSer.loadModal(
            ModalEditarPreguntaPage,
            {
              data: {
                id: this.id,
                themeId: theme._id,
                title: theme.title,
                description: theme.description,
                quiz: theme.quiz
              }
            },
            false,
            updateData
          );
        }
        else {
          await this.globalSer.loadModal(
            ModalEditarContenidoPage,
            {
              id: this.id,
              themeId,
              title: theme.title || null,
              description: theme.description || null,
              urlVideo: theme.urlVideo || null,
              quiz: theme.quiz || null,
            },
            false,
            updateData
          );
        }
      }
      else {
        await this.globalSer.presentAlert(
          'Alerta',
          'Disculpe, ha ocurrido un error al momento de obtener el tema a editar.'
        );
      }
    }
    else if (quiz) {
      await this.globalSer.loadModal(
        ModalEditarPreguntaPage,
        {
          data: {
            id: this.id,
            themeId: null,
            title: null,
            description: null,
            quiz: []
          }
        },
        false,
        updateData
      );
    }
    else {
      await this.globalSer.loadModal(
        ModalEditarContenidoPage,
        {
          id: this.id,
          themeId: null,
          title: null,
          description: null,
          urlVideo: null,
          quiz: null,
        },
        false,
        updateData
      );
    }
  }

  async modalPreviewTheme(themeId: string) {
    if (themeId) {
      const data: any = this.views.temary.data.find(d => d._id === themeId);

      if (data) {
        if (data.quiz) {
          await this.globalSer.loadModal(ModalPreviewPruebaPage, {
            test: data.quiz,
            title: data.title,
            description: data.description
          }, false);
        }
        else
          await this.globalSer.loadModal(ModalPreviewTemaPage, { data }, false);
      }
      else
        await this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener el tema.');
    }
    else
      await this.globalSer.presentAlert('Alerta', 'Disculpe, pero la acción es inválida.');
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
        message: '¿Está seguro qué desea eliminar este tema?',
        confirmAction: () => this.deleteTheme(themeId)
      });
    }
  }

  /*
  Questions
   */

  async modalEditQuestion(themeId: string, questionId: string|null = null) {
    const updateData = (data: any) => {
      if (data) {
        if (themeId) this.views.test.data[index1].test[index2] = data;
        else this.views.temary.data.push(data);
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
      inputType: null,
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
            'Disculpe, ha ocurrido un error al momento de obtener la pregunta a editar.'
          );
          openModal = false;
        }
      }
    }
    else {
      await this.globalSer.presentAlert(
        'Alerta',
        'Disculpe, ha ocurrido un error al momento de obtener la información.'
      );
      openModal = false;
    }

    if (openModal) {
      await this.globalSer.loadModal(ModalEditarPreguntaPage, { data: content }, false, updateData);
    }
  }

  /*
  Publish
   */
  async confirmPublish() {
    const message = this.views.publish.enable ?
      '¿Está seguro qué desea quitar este curso de la sección pública?' +
      '<br><br>NOTA: Si algún miembro agrega este curso a su lista, este no podrá ser modificado.' :
      '¿Está seguro qué desea publicar este curso?<br><br>NOTA: Asegúrese que el contenido del curso esté completo.';

    await this.globalSer.alertConfirm({ message, confirmAction: () => this.publishCourse() });
  }

  // handles to components
  cancelEditInfo = (): void => { this.setShowEditInfo('info'); };
  saveEditInfo = (data: any): void => { this.updateCourse(data); };
  showPreviewModal = (themeId: string): void => { this.modalPreviewTheme(themeId); };
  showEditTheme = (id: string, quiz = false): void => { this.modalTheme(id, quiz); };
  showDeleteConfirmTheme = (themeId: string): void => { this.deleteThemeConfirm(themeId); };
  showEditQuestion = (themeId: string, questionId: string|null = null): void => { this.modalEditQuestion(themeId, questionId); };

}
