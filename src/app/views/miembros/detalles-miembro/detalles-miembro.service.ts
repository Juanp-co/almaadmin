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
}
