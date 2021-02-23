import { Injectable } from '@angular/core';
import Axios from 'axios';
import { CookiesService } from './cookies.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor(private cookiesService: CookiesService) {
    this.axios = Axios.create({
      baseURL: environment.urlApi,
      withCredentials: false
    });
    this.setToken();
  }

  axios: any = null;

  static getErrorCatch(e: any) {
    const ret = {
      error: 'Error desconocido.',
      status: null,
      extraData: null
    };

    if (e) {
      if (e.response && e.response.data) {
        if (e.response.status) ret.status = e.response.status;

        if (e.response.status && e.response.status === 401)
          ret.error = e.response.data.msg ? e.response.data.msg : e.toString();
        else if (e.response.data.errors && e.response.data.errors.length > 0)
          ret.error = e.response.data.errors[0].msg;
        else
          ret.error = e.response.data.msg ? e.response.data.msg : e.toString();

        if (e.response.data) {
          ret.extraData = e.response.data;
          delete ret.extraData.msg;
        }
      }
    }
    return ret;
  }

  setToken() {
    if (this.axios) {
      const token: string = this.cookiesService.getCookie('token');
      if (token) this.axios.defaults.headers.common['x-access-token'] = token;
      else {
        this.cookiesService.removeCookie('data');
        this.cookiesService.removeCookie('token');
        delete this.axios.defaults.headers.common['x-access-token'];
      }
    }
  }

  async getData(endpoint: string, data: any = {}) {
    try {
      this.setToken();
      const res = await this.axios.get(endpoint, { params: data });
      return { success: true, data: res.data };
    }
    catch (e: any) { return AxiosService.getErrorCatch(e); }
  }

  async postData(endpoint: string, data: any = {}) {
    try {
      this.setToken();
      const res = await this.axios.post(endpoint, data);
      return { success: true, data: res.data };
    }
    catch (e: any) { return AxiosService.getErrorCatch(e); }
  }

  async putData(endpoint: string, data: any = {}) {
    try{
      this.setToken();
      const res = await this.axios.put(endpoint, data);
      return { success: true, data: res.data };
    }
    catch (e: any) { return AxiosService.getErrorCatch(e); }
  }

  async deleteData(endpoint: string) {
    try {
      this.setToken();
      const res = await this.axios.delete(endpoint);
      return { success: true, data: res.data };
    }
    catch (e: any) { return AxiosService.getErrorCatch(e); }
  }

}
