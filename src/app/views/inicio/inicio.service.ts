import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService
  ) { }

  // axios actions
  async getReports(query = {}): Promise<any> {
    const res: any = await this.axios.getData('/admin/reports', query);

    if (res && res.success) return res.data.report;
    return this.globalSer.altResponse(res);
  }
}
