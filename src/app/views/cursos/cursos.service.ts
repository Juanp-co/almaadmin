import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';
import {
  checkNameOrLastName,
  checkTitlesOrDescriptions,
  checkYoutubeUrl
} from '../../../Utils/validations.functions';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  inputTypeList = [
    { val: 'text', label: 'Caja de texto simple' },
    { val: 'textarea', label: 'Caja de texto extensa' },
    { val: 'radio', label: 'Respuesta única' },
    { val: 'checkbox', label: 'Respuesta múltiple' },
  ];

  levelsList = [
    { val: 1, label: 'Nivel 1' },
    { val: 2, label: 'Nivel 2' },
    { val: 3, label: 'Nivel 3' },
    { val: 4, label: 'Nivel 4' },
    { val: 5, label: 'Nivel 5' },
  ];

  roles: string[] = [
    'Pastores',
    'Supervisores',
    'Líderes',
    'Padres espirituales',
    'Personas',
  ];

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService
  ) { }

  /*
  Internal actions
   */

  getRoles(rolesList: number[]): string {
    let ret = '';
    if (rolesList.length > 0) {
      for (const v of rolesList) {
        if (ret === '') ret = this.roles[v - 1];
        else ret += `, ${this.roles[v - 1]}`;
      }
    }

    return ret;
  }

  /*
    API services
   */

  async getCourses(query = {}): Promise<any> {
    const res: any = await this.axios.getData('/admin/courses', query);

    if (res && res.success) return res.data.courses;
    return this.globalSer.altResponse(res);
  }

  async getCourse(id: string): Promise<any> {
    const res: any = await this.axios.getData(`/admin/courses/${id}`);

    if (res && res.success) return res.data.course;
    return this.globalSer.altResponse(res);
  }

  async createCourse(data: any): Promise<any> {
    const res: any = await this.axios.postData(`/admin/courses`, data);

    if (res && res.success) return res.data.msg;
    return this.globalSer.altResponse(res);
  }

  async updateCourse(group: string, id: string, data: any): Promise<any> {
    const res: any = await this.axios.putData(`/admin/courses/${id}/${group}`, data);

    if (res && res.success) return res.data.course;
    return this.globalSer.altResponse(res);
  }

  async updateBannerCourse(id: string, data: any): Promise<any> {
    const res: any = await this.axios.putData(`/admin/courses/${id}/banner`, data);

    if (res && res.success) return res.data.banner;
    return this.globalSer.altResponse(res);
  }

  async deleteCourse(id: string): Promise<any> {
    const res: any = await this.axios.deleteData(`/admin/courses/${id}`);

    if (res && res.success) return res.data.msg;
    return this.globalSer.altResponse(res);
  }

  /*
    Temary
   */

  async createThemeCourse(id: string, data: any): Promise<any> {
    const res: any = await this.axios.postData(`/admin/courses/${id}/theme`, data);

    if (res && res.success) return res.data.theme;
    return this.globalSer.altResponse(res);
  }

  async updateThemeCourse(id: string, themeId: string, data: any): Promise<any> {
    const res: any = await this.axios.putData(`/admin/courses/${id}/theme/${themeId}`, data);

    if (res && res.success) return res.data.theme;
    return this.globalSer.altResponse(res);
  }

  async deleteThemeCourse(id: string, themeId: string): Promise<any> {
    const res: any = await this.axios.deleteData(`/admin/courses/${id}/theme/${themeId}`);

    if (res && res.success) return res.data.msg;
    return this.globalSer.altResponse(res);
  }

  async publishCourse(id: string): Promise<any> {
    const res: any = await this.axios.putData(`/admin/courses/${id}/enable`);

    if (res && res.success) return res.data.data;
    return this.globalSer.altResponse(res);
  }

  /*
    Validations
   */
  validationRegister(data: any): string|null {
    if (!checkTitlesOrDescriptions(data.title)) return 'Disculpe, pero debe indicar un título para el curso.';
    if (!checkTitlesOrDescriptions(data.description)) return 'Disculpe, pero debe indicar una descripción para el curso.';
    if ([1, 2, 3, 4, 5].indexOf(data.level) === -1) return 'Disculpe, pero debe indicar el nivel del nuevo curso.';
    if (data.toRoles.length === 0) return 'Disculpe, pero debe indicar los roles a los que va dirigido el curso.';
    return null;
  }

  validationEdit(section: string, data: any): string|null {
    if (section === 'content') {
      if (!checkTitlesOrDescriptions(data.title)) return 'Disculpe, pero debe indicar un título para el tema.';
      if (!data.urlVideo && !data.description) return 'Disculpe, pero debe indicar una descripción o una enlace a un video.';
      else if (!data.urlVideo && data.description && data.description.length <= 5)
        return 'Disculpe, pero debe indicar una descripción válida para el contenido.';
      else if (data.urlVideo && !data.description && !checkYoutubeUrl(data.urlVideo))
        return 'Disculpe, pero debe indicar un enlace válido para el contenido. Sólo se permiten enlaces de YouTube.';
    }
    else if (section === 'info') {
      if (!checkTitlesOrDescriptions(data.title)) return 'Disculpe, pero debe indicar un título para el curso.';
      if (!checkTitlesOrDescriptions(data.description)) return 'Disculpe, pero debe indicar una descripción para el curso.';
      if (data.toRoles.length === 0) return 'Disculpe, pero debe indicar los roles a los que va dirigido el curso.';
      if (!checkNameOrLastName(data.speaker)) return 'Disculpe, pero debe indicar el nombre del ponente del curso.';
      if (!checkTitlesOrDescriptions(data.speakerPosition)) return 'Disculpe, pero debe indicar el cargo o la posición del ponente.';
    }
    else if (section === 'theme') {
      if (!checkTitlesOrDescriptions(data.title)) return 'Disculpe, pero debe indicar un título para el tema.';
      if (data.description && data.description.length <= 5) return 'Disculpe, pero debe indicar una descripción válida para el tema.';
    }
    else if (section === 'question') {
      if (!checkTitlesOrDescriptions(data.title)) return 'Disculpe, pero debe indicar un título para la pregunta.';
      if (data.description && data.description.length <= 5) return 'Disculpe, pero debe indicar una descripción válida para la pregunta.';

      if (data.quiz && data.quiz.length === 0) return 'Disculpe, pero agregar preguntas para el Quiz.';
      else {
        let error = false;
        let msg: string | null = null;

        for (const q of data.quiz) {
          if (!checkTitlesOrDescriptions(q.title)) msg = 'Disculpe, pero debe indicar un título para la pregunta.';
          if (q.description && q.description.length <= 5) msg = 'Disculpe, pero debe indicar una descripción válida para la pregunta.';
          if (!q.inputType) msg = 'Disculpe, pero debe indicar el tipo de campo para la pregunta.';
          if (['text', 'textarea'].indexOf(`${q.inputType}`) === -1) {
            if (!q.values && q.values.length === 0) msg = 'Disculpe, pero debe indicar opciones disponibles para la respuesta.';
            if (q.correctAnswer === null) msg = 'Disculpe, pero debe seleccionar una respuesta correcta.';
          }

          if (msg) {
            error = true;
            break;
          }
        }

        if (error) return msg;
      }
    }
    return null;
  }
}
