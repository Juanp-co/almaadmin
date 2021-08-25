import { Injectable } from '@angular/core';
import {AxiosService} from '../../../services/axios.service';
import {GlobalService} from '../../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class Map2Service {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService
  ) {}

  // axios actions

  async getReverseAddress(data: any = {}): Promise<any> {
    const res: any = await this.axios.getData('/admin/families-groups/counters', data);

    if (res && res.success) return res.data.totals;
    return this.globalSer.altResponse(res);
  }
}
