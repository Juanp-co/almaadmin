import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class FamiliasService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService
  ) { }

  // axios actions

  async getGroupsTotals(query = {}): Promise<any> {
    const res: any = await this.axios.getData('/admin/groups/counters', query);

    if (res && res.success) return res.data.totals;
    return this.globalSer.altResponse(res);
  }

  async getGroups(query = {}): Promise<any> {
    const res: any = await this.axios.getData('/admin/groups', query);

    if (res && res.success) return res.data.groups;
    return this.globalSer.altResponse(res);
  }

  async getGroupDetails(id: string): Promise<any> {
    const res: any = await this.axios.getData(`/admin/groups/${id}`);

    if (res && res.success) return res.data.group;
    return this.globalSer.altResponse(res);
  }

  async addGroup(data): Promise<any> {
    const res: any = await this.axios.postData(`/admin/groups`, data);

    if (res && res.success) return res.data.group;
    return this.globalSer.altResponse(res);
  }

  async updateGroup(id: string, data: any = {}): Promise<any> {
    const res: any = await this.axios.putData(`/admin/groups/${id}`, data);

    if (res && res.success) return res.data.group;
    return this.globalSer.altResponse(res);
  }

  async deleteGroup(id: string): Promise<any> {
    const res: any = await this.axios.deleteData(`/admin/groups/${id}`);

    if (res && res.success) return res.data.msg;
    return this.globalSer.altResponse(res);
  }

  async updateMembersListGroup(id: string, action: string, data: any): Promise<any> {
    const res: any = await this.axios.putData(`/admin/groups/${id}/members/${action}`, data);

    if (res && res.success) return res.data.msg;
    return this.globalSer.altResponse(res);
  }

  async findMembersToGroup(id: string, data: any): Promise<any> {
    const res: any = await this.axios.getData(`/admin/groups/${id}/find-members`, data);

    if (res && res.success) return res.data.users;
    return this.globalSer.altResponse(res);
  }
}
