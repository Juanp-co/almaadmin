import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class MiembrosService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService
  ) { }

  async getUsersCounters(query = {}): Promise<any> {
    const res: any = await this.axios.getData('/admin/users/counters', query);

    if (res && res.success) return res.data.totals;
    return this.globalSer.altResponse(res);
  }

  async getUsersList(query = {}): Promise<any> {
    const res: any = await this.axios.getData('/admin/users', query);

    if (res && res.success) return res.data.users || [];
    return this.globalSer.altResponse(res);
  }

  async registerUser(data: any): Promise<any> {
    const res: any = await this.axios.postData('/admin/users', data);

    if (res && res.success) return res.data;
    return this.globalSer.altResponse(res);
  }
}
