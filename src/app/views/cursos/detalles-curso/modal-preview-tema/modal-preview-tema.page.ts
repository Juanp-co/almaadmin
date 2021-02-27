import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {GlobalService} from '../../../../services/global.service';

@Component({
  selector: 'app-modal-preview-tema',
  templateUrl: './modal-preview-tema.page.html',
  styleUrls: ['./modal-preview-tema.page.scss'],
})
export class ModalPreviewTemaPage implements OnInit {

  @Input() infoToShow: any;
  titleModal = 'Cargando...';
  data: any = null;

  constructor(
    private globalSer: GlobalService,
    private modalCtrl: ModalController,
  ) { }

  async ngOnInit() {
    if (this.infoToShow) {
      if (!this.infoToShow.contentView && this.infoToShow.theme) {
        this.data = this.infoToShow.theme;
        this.titleModal = `Previsualizando: ${this.data.title}`;
      }
      else if (this.infoToShow.contentView && this.infoToShow.content) {
        this.data = this.infoToShow.content;
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
    else {
      await this.globalSer.presentAlert(
        'Alerta',
        'Disculpe, ha ocurrido un error al momento de obtener la información a mostrar.'
      );
      this.closeModal();
    }
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
