import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

@Component({
  selector: 'app-detalles-consolidado',
  templateUrl: './detalles-consolidado.page.html',
  styleUrls: ['./detalles-consolidado.page.scss'],
})
export class DetallesConsolidadoPage implements OnInit {
  @Input() data: any;

  constructor(private modalCtrl: ModalController,) {
    dayjs.extend(duration);
    dayjs.extend(relativeTime);
  }

  async ngOnInit() {
    if (!this.data) await this.closeModal();
    else this.data.date = dayjs(this.data.date).locale('es').format('dddd, DD [de] MMMM [de] YYYY');
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

}
