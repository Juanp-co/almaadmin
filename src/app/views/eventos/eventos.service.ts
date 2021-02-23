import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService
  ) { }

  async getEvents(query = {}): Promise<any> {
    const res: any = await this.axios.getData('/admin/events', query);

    if (res && res.success) return res.data.events;
    return this.globalSer.altResponse(res);
  }

  async addEvent(data: any): Promise<any> {
    const res: any = await this.axios.postData(`/admin/events`, data);

    if (res && res.success) return res.data;
    return this.globalSer.altResponse(res);
  }

  async updateEvent(id: string, data: any): Promise<any> {
    const res: any = await this.axios.putData(`/admin/events/${id}`, data);

    if (res && res.success) return res.data.msg;
    return this.globalSer.altResponse(res);
  }

  async deleteEvent(id: string): Promise<any> {
    const res: any = await this.axios.deleteData(`/admin/events/${id}`);

    if (res && res.success) return res.data.msg;
    return this.globalSer.altResponse(res);
  }
}
