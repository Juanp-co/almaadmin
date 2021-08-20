import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class AjustesService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService
  ) { }


  async getSettings(): Promise<any> {
    const res: any = await this.axios.getData('/admin/settings');
    if (res && res.success) return res.data.data || {};
    return this.globalSer.altResponse(res);
  }

  async updateLinksSettings(data: any = {}): Promise<any> {
    const res: any = await this.axios.putData('/admin/settings', data);
    if (res && res.success) return res.data || {};
    return this.globalSer.altResponse(res);
  }

  async uploadLogosOrBannerSettings(link: string, data: any = {}): Promise<any> {
    const res: any = await this.axios.postData(`/admin/settings/${link}`, data);
    if (res && res.success) return res.data || {};
    return this.globalSer.altResponse(res);
  }

  async changeStatusLogosOrBannerSettings(_id: string, link: string, action: string = 'disable'): Promise<any> {
    const res: any = await this.axios.putData(`/admin/settings/${link}/${_id}/${action}`);
    if (res && res.success) return res.data || {};
    return this.globalSer.altResponse(res);
  }

  async deleteLogosOrBannerSettings(_id: string, link: string): Promise<any> {
    const res: any = await this.axios.deleteData(`/admin/settings/${link}/${_id}`);
    if (res && res.success) return res.data || {};
    return this.globalSer.altResponse(res);
  }
}
