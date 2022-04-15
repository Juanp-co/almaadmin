import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {GruposService} from '../grupos.service';
import {AsignarMiembroPage} from '../asignar-miembro/asignar-miembro.page';
import {GlobalService} from '../../../services/global.service';
import {staticCoords} from '../../../../Utils/data.static';

@Component({
  selector: 'app-detalles-grupo',
  templateUrl: './detalles-grupo.page.html',
  styleUrls: ['./detalles-grupo.page.scss'],
})
export class DetallesGrupoPage implements OnInit {

  // info profile
  title = 'Cargando...';
  id: string|null = null;
  group: any = null;
  formData: any|null = null;

  views: any = {
    data: {
      label: 'Datos del grupo',
      show: true,
      edit: false,
      data: null,
    },
    members1: {
      label: 'Miembros principales',
      show: true
    },
    members2: {
      label: 'Asistentes',
      show: true
    }
  };
  members: any = null;

  handleAddMember = (role: string): Promise<void> => this.modalMember(role);
  handleRemove = (id: string): void => this.removeMember(id);

  constructor(
    private activateRoute: ActivatedRoute,
    private globalSer: GlobalService,
    private gruposService: GruposService,
    private navCtrl: NavController,
  ) {}

  async ngOnInit() {
    await this.globalSer.presentLoading();
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    const data: any = await this.gruposService.getGroupDetails(this.id);

    if (data && !data.error) {
      this.group = {...data};
      this.views.data.data = data;
      this.members = data.members;
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

  async updateMembers(data: any = {}) {
    await this.globalSer.presentLoading('Actualizando, por favor espere ...');

    // get ids
    const members = {
      leaderId: data.leader?._id || null,
      helperId: data.helper?._id || null,
      hostId: data.host?._id || null,
      assistantsIds: data.assistants?.map(a => a._id) || [],
      masterId: data.master?._id || null,
    };

    const updated = await this.gruposService.updateMembersGroup(this.id, { members });

    if (updated && !updated.error) {
      this.group.members = {...updated};
      this.members = {...updated};
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado la información exitosamente.');
    }
    else if (updated && updated.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  // async deleteUser() {
  //   await this.globalSer.presentLoading('Eliminando, por favor espere ...');
  //
  //   const deleted = await this.gruposService.deleteGroup(this.id);
  //
  //   if (deleted && !deleted.error) {
  //     await this.globalSer.dismissLoading();
  //     await this.globalSer.presentAlert('¡Éxito!', deleted || 'Se ha eliminado los datos del grupo exitosamente.');
  //     await this.back();
  //   }
  //   else if (deleted && deleted.error) {
  //     await this.globalSer.dismissLoading();
  //     await this.globalSer.errorSession();
  //   }
  //   else await this.globalSer.dismissLoading();
  // }

  getTitle(edit = false): string {
    return `${edit ? 'Editando' : 'Detalles'}: Sector #${this.group.sector}, Sub-sector #${this.group.subSector}, Grupo #${this.group.number}`;
  }

  async back() {
    await this.navCtrl.back();
  }

  // actions views
  async setShowView(input: string) {
    this.views[input].show = !this.views[input].show;
    if (this.views[input].edit) await this.editEnable();
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
        location: this.views.data.data.location || {
          type: 'Point',
          coordinates: staticCoords
        },
      };
      this.title = this.getTitle(true);
    }
    else {
      this.title = this.getTitle();
      this.formData = null;
    }
    if (!edited) await this.globalSer.dismissLoading();
  }

  // members
  async modalMember(role: string) {
    await this.globalSer.presentLoading();
    const updateData = (member: any) => {
      if (member) {
        const data = {...this.members};
        if (role === 'assistants') data[role].push(member);
        else data[role] = member;
        this.updateMembers(data);
      }
    };
    await this.globalSer.dismissLoading();
    await this.globalSer.loadModal(
      AsignarMiembroPage,
      { data: {...this.members} },
      false,
      updateData
    );
  }

  removeMember(id: string) {
    const confirm = () => {
      const data: any = this.members ? {...this.members} : null;
      if (data) {
        if (data.host?._id === id) data.host = null;
        if (data.helper?._id === id) data.helper = null;
        if (data.leader?._id === id) data.leader = null;
        if (data.master?._id === id) data.master = null;
        data.assistants = data.assistants?.filter(a => a._id !== id) || [];
        this.updateMembers(data);
      }
    };

    this.globalSer.alertConfirm({
      header: 'Confirme',
      message: '¿Está seguro qué desea quitar a este miembro del grupo?',
      confirmAction: () => confirm()
    });
  }

  getParamsToMap() {
    return [ { type: 'Feature', geometry: this.group.location } ];
  }

  setFormDataAndSave(formData: any) {
    this.formData = formData;
    this.updateData();
  }

  handleSave = (formData: any): void => this.setFormDataAndSave(formData);
  handleCancel = async (): Promise<void> => this.editEnable();
}
