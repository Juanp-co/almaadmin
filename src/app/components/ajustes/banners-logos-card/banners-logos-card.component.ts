import {Component, Input, OnInit} from '@angular/core';
import {GlobalService} from '../../../services/global.service';

@Component({
  selector: 'app-banners-logos-card',
  templateUrl: './banners-logos-card.component.html',
  styleUrls: ['./banners-logos-card.component.scss'],
})
export class BannersLogosCardComponent implements OnInit {

  @Input() type = 'logo';
  @Input() data: any = null;
  @Input() handleChangeStatus: (type: string, id: string, action: string) => void;
  @Input() handleDeleteLogoOrBanner: (type: string, id: string) => void;

  constructor(
    private globalSer: GlobalService
  ) { }

  ngOnInit() {
  }

  async confirmChangeStatus() {
    await this.globalSer.alertConfirm({
      header: 'Confirme',
      message: `¿Está seguro qué desea ${!this.data.active ? 'activar' : 'desactivar'} este ${this.type}?`,
      confirmAction: () => {
        this.handleChangeStatus(
          this.type === 'logo' ? 'logos' : 'banners',
          this.data._id, this.data.active ? 'disable' : 'active'
        );
      },
    });
  }

  async confirmDelete() {
    await this.globalSer.alertConfirm({
      header: 'Confirme',
      message: `¿Está seguro qué desea borrar est${this.type === 'logo' ? 'e' : 'a'} ${this.type}?`,
      confirmAction: () => {
        this.handleDeleteLogoOrBanner(
          this.type === 'logo' ? 'logos' : 'banners',
          this.data._id
        );
      },
    });
  }

}
