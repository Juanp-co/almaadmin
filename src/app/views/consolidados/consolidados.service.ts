import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class ConsolidadosService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService
  ) {}

  // axios actions

  async getConsolidatesReport(query: any = {}): Promise<any> {
    const res: any = await this.axios.getData('/admin/consolidates', query);

    if (res && res.success) return res.data.data || null;
    return this.globalSer.altResponse(res);
  }

  async saveConsolidateReport(data: any = {}): Promise<any> {
    const res: any = await this.axios.postData('/admin/consolidates/report', data);

    if (res && res.success) return res.data.msg;
    return this.globalSer.altResponse(res);
  }

  async getConsolidatesMembers(): Promise<any> {
    const res: any = await this.axios.getData('/admin/consolidates/members');

    if (res && res.success) return res.data.members;
    return this.globalSer.altResponse(res);
  }
}
