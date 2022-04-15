import { Injectable } from '@angular/core';
import {GlobalService} from '../../services/global.service';
import {AxiosService} from '../../services/axios.service';

@Injectable({
  providedIn: 'root'
})
export class IglesiasService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService
  ) { }

  async getChurches(): Promise<any> {
    const res: any = await this.axios.getData('/admin/churches');

    if (res && res.success) return res.data.churches || [];
    return this.globalSer.altResponse(res);
  }

  async getChurch(id): Promise<any> {
    const res: any = await this.axios.getData(`/admin/churches/${id}`);

    if (res && res.success) return res.data.church || null;
    return this.globalSer.altResponse(res);
  }

  async saveChurch(formData = {}): Promise<any> {
    const res: any = await this.axios.postData(`/admin/churches`, formData);

    if (res && res.success) return res.data;
    return this.globalSer.altResponse(res);
  }

  async updateChurch(id, formData = {}): Promise<any> {
    const res: any = await this.axios.putData(`/admin/churches/${id}`, formData);

    if (res && res.success) return res.data;
    return this.globalSer.altResponse(res);
  }

  async removeChurch(id): Promise<any> {
    const res: any = await this.axios.deleteData(`/admin/churches/${id}`);

    if (res && res.success) return res.data;
    return this.globalSer.altResponse(res);
  }
}
