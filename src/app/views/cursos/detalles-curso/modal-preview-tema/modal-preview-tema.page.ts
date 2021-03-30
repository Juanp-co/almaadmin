import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {GlobalService} from '../../../../services/global.service';

@Component({
  selector: 'app-modal-preview-tema',
  templateUrl: './modal-preview-tema.page.html',
  styleUrls: ['./modal-preview-tema.page.scss'],
})
export class ModalPreviewTemaPage implements OnInit {

  @Input() data: any;
  titleModal = 'Cargando...';

  constructor(
    private globalSer: GlobalService,
    private modalCtrl: ModalController,
  ) { }

  async ngOnInit() {
    if (this.data) {
      this.titleModal = `Previsualizando: ${this.data.title}`;
    }
    else {
      await this.globalSer.presentAlert(
        'Alerta',
        'Disculpe, pero no existe información que mostrar.'
      );
      this.closeModal();
    }
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
