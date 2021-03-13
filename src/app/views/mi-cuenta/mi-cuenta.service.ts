import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';
import {departments} from '../../../Utils/locations.data';
import {bloodType, civilStatus, companyType, documentType, educationLevels, gender, professions} from '../../../Utils/profile.data';

@Injectable({
  providedIn: 'root'
})
export class MiCuentaService {


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
    private globalSer: GlobalService
  ) { }

  // axios actions
  async getData(): Promise<any> {
    const res: any = await this.axios.getData('/user');

    if (res && res.success) return res.data.data;
    return this.globalSer.altResponse(res);
  }

  async changePassword(data = {}): Promise<any> {
    const res: any = await this.axios.putData('/user/change-password', data);

    if (res && res.success) return res.data.msg;
    return this.globalSer.altResponse(res);
  }

  async updateData(data = {}): Promise<any> {
    const res: any = await this.axios.putData('/user', data);

    if (res && res.success) return res.data.data;
    return this.globalSer.altResponse(res);
  }
}
