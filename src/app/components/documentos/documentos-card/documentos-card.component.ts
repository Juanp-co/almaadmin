import {Component, Input, OnInit} from '@angular/core';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import {GlobalService} from '../../../services/global.service';

@Component({
  selector: 'app-documentos-card',
  templateUrl: './documentos-card.component.html',
  styleUrls: ['./documentos-card.component.scss'],
})
export class DocumentosCardComponent implements OnInit {

  @Input() data: any;
  @Input() showButtonsOwn = false;
  @Input() handleRemove: (id: any) => void;

  dataDoc: any = null;

  constructor(private globalSer: GlobalService) {
    dayjs.extend(duration);
    dayjs.extend(relativeTime);
  }

  ngOnInit() {
    if (this.data && this.data.created_at) {

      let rolesText = '';
      const rolesListSingleText = [
        'Administradores',
        'Pastores',
        'Supervisores',
        'Líderes'
      ];
      this.data.roles?.forEach(r => {
        const role = rolesListSingleText[r];
        if (!rolesText) rolesText += role;
        else rolesText += `, ${role}`;
      });

      this.data.roles = rolesText;
      this.dataDoc = this.data;
      this.dataDoc.created_at = dayjs.unix(this.data.created_at).locale('es').format('DD [de] MMMM [de] YYYY');
    }
  }

  async confirmDelete(id) {
    await this.globalSer.alertConfirm({
      header: '¡Confirme!',
      message: '¿Está seguro qué desea eliminar este documento?',
      confirmAction: () => this.handleRemove(id)
    });
  }

  async showPdf() {
    window?.open(this.data.urlDoc, '_system');
  }

}
