import { Component, OnInit } from '@angular/core';
import {AjustesService} from './ajustes.service';
import {GlobalService} from '../../services/global.service';
import {checkFacebookUrl, checkInstagramUrl, checkTwitterUrl, checkUrl, checkYoutubeUrl} from '../../../Utils/validations.functions';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  views: any = {
    links: true,
    logos: true,
    banners: true,
  };

  params: any = {
    facebook: null,
    instagram: null,
    twitter: null,
    web: null,
    youtube: null,
    logos: null,
    banners: null,
  };

  formLinks: any = {
    facebook: null,
    instagram: null,
    twitter: null,
    web: null,
    youtube: null,
  };

  formPic: any = {
    picture: null,
    active: false
  };
  formBanners = false;
  formLogos = false;

  constructor(
    private ajustesService: AjustesService,
    private globalSer: GlobalService,
  ) { }

  ngOnInit() {
    this.getSettings();
  }

  async getSettings() {
    await this.globalSer.presentLoading();
    const data: any = await this.ajustesService.getSettings();

    if (data && !data.error) {
      this.params = {...this.params, ...data};
      this.formLinks.facebook = this.params.facebook;
      this.formLinks.instagram = this.params.instagram;
      this.formLinks.twitter = this.params.twitter;
      this.formLinks.web = this.params.web;
      this.formLinks.youtube = this.params.youtube;
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) await this.globalSer.errorSession();
    else await this.globalSer.dismissLoading();
  }

  async updateLinks() {
    await this.globalSer.presentLoading();
    const res: any = await this.ajustesService.updateLinksSettings({...this.formLinks});

    if (res && !res.error) {
      const { data, msg } = res;
      this.params = {...this.params, ...data};
      this.params.banners = await this.params.banners.reverse();
      this.params.logos = await this.params.logos.reverse();
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', msg || 'Se han actualizado la información exitosamente.');
    }
    else if (res && res.error) await this.globalSer.errorSession();
    else await this.globalSer.dismissLoading();
  }

  async uploadLogoOrBanner(type: string) {
    await this.globalSer.presentLoading();
    const res: any = await this.ajustesService.uploadLogosOrBannerSettings(type, {...this.formPic});

    if (res && !res.error) {
      const { data, msg } = res;
      if (this.params[type]) this.params[type] = [data, ...this.params[type]];
      else this.params[type] = [data];
      this.params[type]?.forEach(i => {
        if (data.active && i._id !== data._id) i.active = false;
      });
      this.setShowFormLogosOrBanners(type === 'logos' ? 'formLogos' : 'formBanners');
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', msg || 'Se han subido la imagen exitosamente.');
    }
    else if (res && res.error) await this.globalSer.errorSession();
    else await this.globalSer.dismissLoading();
  }

  async changeStatusLogoOrBanner(type: string, id: string, action: string) {
    await this.globalSer.presentLoading();
    const res: any = await this.ajustesService.changeStatusLogosOrBannerSettings(id, type, action);

    if (res && !res.error) {
      const { data, msg } = res;
      this.params[type]?.forEach(i => {
        if (i._id === id) i.active = data.active;
        else i.active = false;
      });
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', msg || 'Se han actualizado la información exitosamente.');
    }
    else if (res && res.error) await this.globalSer.errorSession();
    else await this.globalSer.dismissLoading();
  }

  async deleteLogoOrBanner(type: string, id: string) {
    await this.globalSer.presentLoading();
    const res: any = await this.ajustesService.deleteLogosOrBannerSettings(id, type);

    if (res && !res.error) {
      this.params[type] = this.params[type].filter((i: any) => i._id !== id);
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', res?.msg || 'Se ha eliminado la imagen exitosamente.');
    }
    else if (res && res.error) await this.globalSer.errorSession();
    else await this.globalSer.dismissLoading();
  }

  setPictureValue(picture: string|null) {
    this.formPic.picture = picture;
  }

  setShowView(view: string) {
    this.views[view] = !this.views[view];
  }

  setShowFormLogosOrBanners(formParam: string) {
    if (this[formParam]) {
      this.formPic = {
        picture: null,
        active: false
      };
    }
    this[formParam] = !this[formParam];
  }

  /* Actions links */

  validateLinks() {
    const { facebook, instagram, twitter, web, youtube } = this.formLinks;
    let msg = null;
    if (facebook && !checkFacebookUrl(facebook)) msg = 'La URL de facebook es incorrecta.';
    else if (instagram && !checkInstagramUrl(instagram)) msg = 'La URL de instagram es incorrecta.';
    else if (twitter && !checkTwitterUrl(twitter)) msg = 'La URL de twitter es incorrecta.';
    else if (web && !checkUrl(web)) msg = 'La URL del sitio web es incorrecta.';
    else if (youtube && !checkYoutubeUrl(youtube)) msg = 'La URL de youtube es incorrecta.';
    return msg;
  }

  async confirmUpdateLinks() {
    const validate = this.validateLinks();
    if (validate) await this.globalSer.presentAlert('Error', validate);
    else {
      await this.globalSer.alertConfirm({
        header: 'Confirme',
        message: `¿Está seguro qué desea actualizar los enlaces de las redes sociales?`,
        confirmAction: () => this.updateLinks(),
      });
    }
  }

  /* Actions logos */
  validateFormPic() {
    if (!this.formPic.picture) return `Disculpe, pero debe cargar una imagen.`;
    return null;
  }

  async confirmUploadPicture(type: string) {
    const validate = this.validateFormPic();

    if (validate) await this.globalSer.presentAlert('Error', validate);
    else {
      await this.globalSer.alertConfirm({
        header: 'Confirme',
        message: `¿Está seguro qué desea subir ${type === 'formLogos' ? 'este logo' : 'esta portada'}?`,
        confirmAction: () => this.uploadLogoOrBanner(type === 'formLogos' ? 'logos' : 'banners'),
      });
    }
  }

  updatePictureValueForm = (picture: string|null): void => this.setPictureValue(picture);
  handleChangeStatusLogoOrBanner = (type: string, id: string, action: string) => this.changeStatusLogoOrBanner(type, id, action);
  handleDeleteLogoOrBanner = (type: string, id: string) => this.deleteLogoOrBanner(type, id);
}
