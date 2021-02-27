import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';
import {
  checkBase64,
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
    { val: 'checkbox', label: 'Múltiples respuestas múltiple' },
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

  async getCoursesTotals(query = {}): Promise<any> {
    const res: any = await this.axios.getData('/admin/courses/counters', query);

    if (res && res.success) return res.data.totals;
    return this.globalSer.altResponse(res);
  }

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

    if (res && res.success) return res.data.msg;
    return this.globalSer.altResponse(res);
  }

  async deleteCourse(id: string): Promise<any> {
    const res: any = await this.axios.deleteData(`/admin/courses/${id}`);

    if (res && res.success) return res.data.msg;
    return this.globalSer.altResponse(res);
  }

  /*
    Temaries
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

  /*
   Content
   */

  async createContentThemeCourse(id: string, themeId: string, data: any): Promise<any> {
    const res: any = await this.axios.postData(`/admin/courses/${id}/theme/${themeId}/content`, data);

    if (res && res.success) return res.data.content;
    return this.globalSer.altResponse(res);
  }

  async updateContentThemeCourse(id: string, themeId: string, contentId: string, data: any): Promise<any> {
    const res: any = await this.axios.putData(`/admin/courses/${id}/theme/${themeId}/content/${contentId}`, data);

    if (res && res.success) return res.data.content;
    return this.globalSer.altResponse(res);
  }

  async deleteContentThemeCourse(id: string, themeId: string, contentId: string): Promise<any> {
    const res: any = await this.axios.deleteData(`/admin/courses/${id}/theme/${themeId}/content/${contentId}`);

    if (res && res.success) return res.data.msg;
    return this.globalSer.altResponse(res);
  }

  /*
   Questions
   */

  async addQuestionTestThemeCourse(id: string, themeId: string, data: any): Promise<any> {
    const res: any = await this.axios.postData(`/admin/courses/${id}/theme/${themeId}/test`, data);

    if (res && res.success) return res.data.question;
    return this.globalSer.altResponse(res);
  }

  async updateQuestionTestThemeCourse(id: string, themeId: string, questionId: string, data: any): Promise<any> {
    const res: any = await this.axios.putData(`/admin/courses/${id}/theme/${themeId}/test/${questionId}`, data);

    if (res && res.success) return res.data.question;
    return this.globalSer.altResponse(res);
  }

  async deleteQuestionTestThemeCourse(id: string, themeId: string, questionId: string): Promise<any> {
    const res: any = await this.axios.deleteData(`/admin/courses/${id}/theme/${themeId}/test/${questionId}`);

    if (res && res.success) return res.data.msg;
    return this.globalSer.altResponse(res);
  }

  /*
   Levels
   */

  async addLevelCourse(id: string, data: any): Promise<any> {
    const res: any = await this.axios.postData(`/admin/courses/${id}/levels`, data);

    if (res && res.success) return res.data.msg;
    return this.globalSer.altResponse(res);
  }

  async deleteLevelCourse(id: string, levelId: string): Promise<any> {
    const res: any = await this.axios.deleteData(`/admin/courses/${id}/levels/${levelId}`);

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
    if (!data.banner) return 'Disculpe, pero debe subir una imagen para el curso.';
    if (data.toRoles.length === 0) return 'Disculpe, pero debe indicar los roles a los que va dirigido el curso.';
    return null;
  }

  validationEdit(section: string, data: any): string|null {
    if (section === 'banner') {
      if (!checkBase64(data.banner)) return 'Disculpe, pero debe seleccionar una imagen válida.';
    }
    else if (section === 'content') {
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
      if (!data.inputType) return 'Disculpe, pero debe indicar el tipo de campo para la pregunta.';
      if (['text', 'textarea'].indexOf(`${data.inputType}`) === -1) {
        if (!data.values && data.values.length === 0) return 'Disculpe, pero debe indicar opciones disponibles para la respuesta.';
        if (data.correctAnswer === null) return 'Disculpe, pero debe seleccionar una respuesta correcta.';
      }
    }
    return null;
  }
}
