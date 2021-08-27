import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {GlobalService} from '../../../services/global.service';

@Component({
  selector: 'app-crear-devocionales',
  templateUrl: './crear-devocionales.page.html',
  styleUrls: ['./crear-devocionales.page.scss'],
})
export class CrearDevocionalesPage implements OnInit {

  constructor(
    private globalSer: GlobalService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  async confirmCancel() {
    await this.globalSer.alertConfirm({
      header: 'Confirme',
      message: '¿Está seguro qué desea salir del formulario?',
      confirmAction: () => {
        if (!!this.handleCancel) this.handleCancel();
      }
    });
  }

  back() {
    this.navCtrl.back();
  }

  handleCancel = (): void => this.back();

}
