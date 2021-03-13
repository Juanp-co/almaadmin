import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class CuentasBancariasService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService
  ) { }

  // axios actions

  async getBanks(): Promise<any> {
    const res: any = await this.axios.getData('/admin/banks');

    if (res && res.success) return res.data.banks || [];
    return this.globalSer.altResponse(res);
  }

  async saveBank(data: any): Promise<any> {
    const res: any = await this.axios.postData('/admin/banks', data);

    if (res && res.success) return res.data.bank;
    return this.globalSer.altResponse(res);
  }

  async updateBank(id: string, data: any): Promise<any> {
    const res: any = await this.axios.putData(`/admin/banks/${id}`, data);

    if (res && res.success) return res.data.bank;
    return this.globalSer.altResponse(res);
  }

  async deleteBank(id: string): Promise<any> {
    const res: any = await this.axios.deleteData(`/admin/banks/${id}`);

    if (res && res.success) return res.data.msg;
    return this.globalSer.altResponse(res);
  }

}
