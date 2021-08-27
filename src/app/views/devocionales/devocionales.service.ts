import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class DevocionalesService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService
  ) { }

  async getTotals(query = {}): Promise<any> {
    const res: any = await this.axios.getData('/admin/devotionals/counters', query);
    if (res && res.success) return res.data?.data?.totals || 0;
    return this.globalSer.altResponse(res);
  }

  async getList(query = {}): Promise<any> {
    const res: any = await this.axios.getData('/admin/devotionals', query);
    if (res && res.success) return res.data?.devotionals || [];
    return this.globalSer.altResponse(res);
  }

  async getDetails(id: string|null): Promise<any> {
    const res: any = await this.axios.getData(`/admin/devotionals/${id}`);

    if (res && res.success) return res.data?.devotional || {};
    return this.globalSer.altResponse(res);
  }

  async remove(id: string|null): Promise<any> {
    const res: any = await this.axios.deleteData(`/admin/devotionals/${id}`);

    if (res && res.success) return res.data || {};
    return this.globalSer.altResponse(res);
  }


}
