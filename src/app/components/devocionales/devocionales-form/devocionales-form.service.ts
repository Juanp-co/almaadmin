import { Injectable } from '@angular/core';
import {AxiosService} from '../../../services/axios.service';
import {GlobalService} from '../../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class DevocionalesFormService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService
  ) { }

  async save(data = {}): Promise<any> {
    const res: any = await this.axios.postData(`/admin/devotionals`, data);

    if (res && res.success) return res.data || {};
    return this.globalSer.altResponse(res);
  }

  async update(id: string, data = {}): Promise<any> {
    const res: any = await this.axios.putData(`/admin/devotionals/${id}`, data);

    if (res && res.success) return res.data || {};
    return this.globalSer.altResponse(res);
  }
}
