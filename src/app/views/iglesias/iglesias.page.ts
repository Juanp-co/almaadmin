import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../services/global.service';
import {Router} from '@angular/router';
import {IglesiasService} from './iglesias.service';
import {CookiesService} from '../../services/cookies.service';

@Component({
  selector: 'app-iglesias',
  templateUrl: './iglesias.page.html',
  styleUrls: ['./iglesias.page.scss'],
})
export class IglesiasPage implements OnInit {

  churches: any[]|null = null;
  showForm = false;

  constructor(
    private cookieService: CookiesService,
    private globalSer: GlobalService,
    private iglesiasService: IglesiasService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    if (!this.globalSer.checkSession()) this.router.navigate(['/ingresar']);
    else this.getChurches();
  }

  async getChurches() {
    await this.globalSer.presentLoading();
    const data = await this.iglesiasService.getChurches();

    if (data && !data.error) {
      this.churches = data;
      await this.cookieService.setCookie('churches', data.map(d => ({ _id: d._id, name: d.name })));
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async saveData(formData) {
    await this.globalSer.presentLoading();
    const data = await this.iglesiasService.saveChurch(formData);

    if (data && !data.error) {
      this.churches.push(data.church);
      // update data churches list
      const churches = await this.cookieService.getCookie('churches');
      churches.push(data.church);
      await this.cookieService.setCookie('churches', churches);
      await this.globalSer.dismissLoading();
      this.setShowForm();
      await this.globalSer.presentAlert(
        '¡Éxito!',
        data.msg || 'Se ha agregado la iglesia exitosamente.'
      );
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  setShowForm() {
    this.showForm = !this.showForm;
  }

  handleCancel = (): void => this.setShowForm();
  handleSubmit = (data: any) => this.saveData(data);

}
