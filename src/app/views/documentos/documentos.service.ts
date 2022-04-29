import { Injectable } from '@angular/core';
import {GlobalService} from '../../services/global.service';
import {AxiosService} from '../../services/axios.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService
  ) { }

  async getResources() {
    const res: any = await this.axios.getData('/admin/resources');
    return res && res.success ? (res.data.resources || []) : [];
  }

  async saveResources(data = {}) {
    const res: any = await this.axios.postData('/admin/resources', data);
    if (res && res.success) return res.data;
    return this.globalSer.altResponse(res);
  }

  async deleteResources(id) {
    const res: any = await this.axios.deleteData(`/admin/resources/${id}`);
    if (res && res.success) return res.data;
    return this.globalSer.altResponse(res);
  }
}
