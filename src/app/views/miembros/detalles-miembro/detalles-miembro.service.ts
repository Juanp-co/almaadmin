import { Injectable } from '@angular/core';
import {AxiosService} from '../../../services/axios.service';
import {GlobalService} from '../../../services/global.service';
import {bloodType, civilStatus, companyType, documentType, educationLevels, gender, professions} from '../../../../Utils/profile.data';
import {departments} from '../../../../Utils/locations.data';

@Injectable({
  providedIn: 'root'
})
export class DetallesMiembroService {

  professionsList: any[] = professions;
  companyTypeList: string[] = companyType;
  departmentsList: any[] = departments;
  educationLevel: string[] = educationLevels;
  bloodTypeList: string[] = bloodType;
  civilStatusList: string[] = civilStatus;
  genderList: string[] = gender;
  documentTypesList: string[] = documentType;

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService,
  ) {  }

  async getChurches() {
    const res: any = await this.axios.getData(`/churches`);
    if (res && res.success) return res.data.churches || [];
    return [];
  }

  async getUserDetails(id: string) {
    const res: any = await this.axios.getData(`/admin/users/${id}`);

    if (res && res.success) return res.data.user;
    return this.globalSer.altResponse(res);
  }

  async updateDataUser(id: string, data: any): Promise<any | null> {
    const res: any = await this.axios.putData(`/admin/users/${id}`, data);

    if (res && res.success) return res.data.user;
    return this.globalSer.altResponse(res);
  }

  async updateRoleUser(id: string, data: any): Promise<any | null> {
    const res: any = await this.axios.putData(`/admin/users/${id}/role`, data);

    if (res && res.success) return res.data.msg || 'Se asignado el nuevo rol al miembro exitosamente.';
    return this.globalSer.altResponse(res);
  }

  async resetPass(id: string, data: any): Promise<any | null> {
    const res: any = await this.axios.putData(`/admin/users/${id}/reset-password`, data);

    if (res && res.success) return res.data.msg || 'Se han cambiado la contraseña del miembro exitosamente.';
    return this.globalSer.altResponse(res);
  }

  async setAsConsolidator(id) {
    const res: any = await this.axios.putData(`admin/users/${id}/consolidator`);

    if (res && res.success) return res.data.msg;
    return this.globalSer.altResponse(res);
  }

  async deleteUser(id: string): Promise<any | null> {
    const res: any = await this.axios.deleteData(`/admin/users/${id}`);

    if (res && res.success) return res.data.msg;
    return this.globalSer.altResponse(res);
  }

  async getUsersCourses(id: string): Promise<any> {
    const res: any = await this.axios.getData(`/admin/users/${id}/courses`);

    if (res && res.success) return res.data.courses || [];
    return this.globalSer.altResponse(res);
  }

  async getUsersReferrals(id: string): Promise<any> {
    const res: any = await this.axios.getData(`/admin/users/${id}/referrals`);

    if (res && res.success) return res.data.referrals || [];
    return this.globalSer.altResponse(res);
  }
}
