import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';
import {checkIfValueIsNumber, checkTitlesOrDescriptions} from '../../../Utils/validations.functions';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService
  ) {}

  // axios actions

  async getTotalsGroups(query: any = {}): Promise<any> {
    const res: any = await this.axios.getData('/admin/families-groups/counters', query);

    if (res && res.success) return res.data.totals;
    return this.globalSer.altResponse(res);
  }

  async getGroups(query: any = {}): Promise<any> {
    const res: any = await this.axios.getData('/admin/families-groups', query);

    if (res && res.success) return res.data.groups;
    return this.globalSer.altResponse(res);
  }

  async getGroupDetails(id: string): Promise<any> {
    const res: any = await this.axios.getData(`/admin/families-groups/${id}`);

    if (res && res.success) return res.data.group;
    return this.globalSer.altResponse(res);
  }

  async saveGroup(data: any): Promise<any> {
    const res: any = await this.axios.postData(`/admin/families-groups`, data);

    if (res && res.success) return res.data.msg;
    return this.globalSer.altResponse(res);
  }

  async updateGroup(id: string, data: any): Promise<any> {
    const res: any = await this.axios.putData(`/admin/families-groups/${id}`, data);

    if (res && res.success) return res.data.group;
    return this.globalSer.altResponse(res);
  }

  async deleteGroup(id: string): Promise<any> {
    const res: any = await this.axios.deleteData(`/admin/families-groups/${id}`);

    if (res && res.success) return res.data.msg;
    return this.globalSer.altResponse(res);
  }

  // members
  async updateMembersGroup(id: string, data: any): Promise<any> {
    const res: any = await this.axios.putData(`/admin/families-groups/${id}/members`, data);

    if (res && res.success) return res.data.members;
    return this.globalSer.altResponse(res);
  }

  // reports
  async getFamiliesGroupsReports(query = {}): Promise<any> {
    const res: any = await this.axios.getData('/admin/reports/families-groups', query);

    if (res && res.success) return res.data.reports;
    return this.globalSer.altResponse(res);
  }
}
