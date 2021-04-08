import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {AsignarMiembroPage} from '../asignar-miembro/asignar-miembro.page';
import {GruposService} from '../grupos.service';
import {GlobalService} from '../../../services/global.service';
import {onlyNumbersInputValidation2} from '../../../../Utils/validations.functions';

@Component({
  selector: 'app-detalles-grupo',
  templateUrl: './detalles-grupo.page.html',
  styleUrls: ['./detalles-grupo.page.scss'],
})
export class DetallesGrupoPage implements OnInit {

  // info profile
  title = 'Cargando...';
  id: string|null = null;
  group: any|null = null;
  formData: any|null = null;

  views: any = {
    data: {
      label: 'Datos del grupo',
      show: true,
      edit: false,
      data: null,
    },
    members: {
      label: 'Miembros',
      show: false,
      edit: false,
      data: {
        leader: null,
        host: null,
        assistant: null,
        master: null,
      },
    }
  };
  handleRemove = (id: string): void => this.removeMember(id);

  constructor(
    private activateRoute: ActivatedRoute,
    private globalSer: GlobalService,
    private gruposService: GruposService,
    private navCtrl: NavController,
  ) {}

  async ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    await this.globalSer.presentLoading();
    const data: any = await this.gruposService.getGroupDetails(this.id);

    if (data && !data.error) {
      this.group = {...data};
      this.views.data.data = data;
      this.views.members.data = data.members;
      this.title = this.getTitle();
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async updateData() {
    await this.globalSer.presentLoading('Actualizando, por favor espere ...');
    const updated = await this.gruposService.updateGroup(this.id, this.formData);

    if (updated && !updated.error) {
      this.group = {...updated};
      this.views.data.data = {...updated};
      this.title = this.getTitle();
      await this.editEnable(true);
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado la información exitosamente.');
    }
    else if (updated && updated.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async updateMembers(data) {
    await this.globalSer.presentLoading('Actualizando, por favor espere ...');

    // get ids
    const members = {
      leaderId: data.leader ? (data.leader._id || null) : null,
      hostId: data.host ? (data.host._id || null) : null,
      assistantId: data.assistant ? (data.assistant._id || null) : null,
      masterId: data.master ? (data.master._id || null) : null,
    };

    const updated = await this.gruposService.updateMembersGroup(this.id, { members });

    if (updated && !updated.error) {
      this.group.members = {...updated};
      this.views.members.data = {...updated};
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado la información exitosamente.');
    }
    else if (updated && updated.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async deleteUser() {
    await this.globalSer.presentLoading('Eliminando, por favor espere ...');

    const deleted = await this.gruposService.deleteGroup(this.id);

    if (deleted && !deleted.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', deleted || 'Se ha eliminado los datos del grupo exitosamente.');
      await this.back();
    }
    else if (deleted && deleted.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  getTitle(edit = false): string {
    return `${edit ? 'Editando' : 'Detalles'}: Sector #${this.group.sector}, Sub-sector #${this.group.subSector}, Grupo #${this.group.number}`;
  }

  async back() {
    await this.navCtrl.back();
  }

  // actions views
  async setShowView(input: string) {
    this.views[input].show = !this.views[input].show;
    if (this.views[input].edit) {
      await this.editEnable();
    }
  }

  // actions
  async editEnable(edited = false) {
    if (!edited) await this.globalSer.presentLoading();

    this.views.data.edit = !this.views.data.edit;

    if (this.views.data.edit) {
      this.formData = {
        sector: this.views.data.data.sector,
        subSector: this.views.data.data.subSector,
        number: this.views.data.data.number,
        direction: this.views.data.data.direction,
      };
      this.title = this.getTitle(true);
    }
    else {
      this.title = this.getTitle();
      this.formData = null;
    }
    if (!edited) await this.globalSer.dismissLoading();
  }

  validateOnlyNumber(event: any) {
    onlyNumbersInputValidation2(event);
  }

  async confirmUpdate() {
    const validated = this.gruposService.validateDataGroup(this.formData);

    if (validated) await this.globalSer.presentAlert('Alerta', validated);
    else {
      await this.globalSer.alertConfirm({
        header: 'Confirme',
        message: '¿Está seguro qué desea actualizar información de este grupo?',
        confirmAction: () => this.updateData()
      });
    }
  }

  // members
  async modalMember(role: string) {
    await this.globalSer.presentLoading();
    const updateData = (member: any) => {
      if (member) {
        const data = {...this.views.members.data};
        data[role] = member;
        this.updateMembers(data);
      }
    };
    await this.globalSer.dismissLoading();
    await this.globalSer.loadModal(
      AsignarMiembroPage,
      { data: {...this.views.members.data} },
      false,
      updateData
    );
  }

  removeMember(id: string) {
    const confirm = () => {
      const data = {...this.views.members.data};
      if (data.assistant && data.assistant._id === id) data.assistant = null;
      if (data.host && data.host._id === id) data.host = null;
      if (data.leader && data.leader._id === id) data.leader = null;
      if (data.master && data.master._id === id) data.master = null;
      this.updateMembers(data);
    };

    this.globalSer.alertConfirm({
      header: 'Confirme',
      message: '¿Está seguro qué desea quitar a este miembro del grupo?',
      confirmAction: () => confirm()
    });
  }

}
