import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController, NavController} from '@ionic/angular';
import {FamiliasService} from '../familias.service';
import {GlobalService} from '../../../services/global.service';
import {AxiosService} from '../../../services/axios.service';
import {checkCodeValue, checkTitlesOrDescriptions} from '../../../../Utils/validations.functions';

@Component({
  selector: 'app-familias-detalles',
  templateUrl: './familias-detalles.page.html',
  styleUrls: ['./familias-detalles.page.scss'],
})
export class FamiliasDetallesPage implements OnInit {
  title = 'Cargando...';
  id: any = null;
  staticData: any = null;
  group: any = null;
  edit = false;
  formData: any = null;
  findMembers = false;
  users: any = [];
  selectedUsers: any = [];
  selectedUsersIds: any = [];
  queryParams: any = {
    limit: 100,
    page: 1,
    input: 'name',
    value: 1,
    word: null
  };
  handleAdd = (id: string): void => {
    this.addToSelected(id);
  }
  handleRemove = (id: string): void => {
    this.removeOfSelected(id);
  }
  handleDelete = (id: string): void => {
    this.confirmRemoveMember(id);
  }

  constructor(
    private activateRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    private axios: AxiosService,
    private globalSer: GlobalService,
    private familiasService: FamiliasService,
    private navCtrl: NavController,
    private router: Router,
  ) {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/ingresar']);
  }

  async ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    await this.globalSer.presentLoading();
    const data: any = await this.familiasService.getGroupDetails(this.id);

    if (data && !data.error) {
      this.staticData = {...data};
      this.group = {...this.staticData};
      this.title = `Detalles: ${this.group.name}`;
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async ionViewWillEnter() {
    if (!this.globalSer.checkSession())
      this.router.navigate(['/ingresar']);
  }

  // actions
  async updateData() {
    await this.globalSer.presentLoading('Actualizando, por favor espere ...');

    const data: any = {...this.formData};
    const updated = await this.familiasService.updateGroup(this.id, data);

    if (updated && !updated.error) {
      this.group = {...this.group, ...updated};
      this.staticData = {...updated};
      await this.editEnable(true);
      await this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado los datos del grupo exitosamente.');
    }
    else if (updated && updated.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async deleteGroup() {
    await this.globalSer.presentLoading('Eliminando, por favor espere ...');

    const deleted = await this.familiasService.deleteGroup(this.id);

    if (deleted && !deleted.error) {
      await this.globalSer.presentAlert('¡Éxito!', 'Se ha eliminado los datos del grupo exitosamente.');
      await this.navCtrl.back();
      await this.globalSer.dismissLoading();
    }
    else if (deleted && deleted.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async addOrRemoveMembersGroup(action: string) {
    await this.globalSer.presentLoading('Actualizando listado de miembros, por favor espere ...');

    const data = {
      members: action === 'remove' ? this.group.members.map(m => m._id) : this.selectedUsersIds
    };

    const res = await this.familiasService.updateMembersListGroup(this.id, action, data);

    if (res && !res.error) {
      if (action === 'add') {
        this.group.members = this.group.members.concat(this.selectedUsers);
        this.staticData.members = this.group.members;
        this.users = [];
        this.selectedUsers = [];
        this.selectedUsersIds = [];
        this.findMembers = false;
      }
      else {
        this.staticData.members = this.group.members;
      }
      await this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado el listado de miembros exitosamente.');
      await this.globalSer.dismissLoading();
    }
    else if (res && res.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else {
      this.group.members = this.staticData.members;
      await this.globalSer.dismissLoading();
    }
  }

  async findMembersList() {
    await this.globalSer.presentLoading('Obteniendo usuarios, por favor espere ...');

    const data = await this.familiasService.findMembersToGroup(this.id, this.queryParams);

    if (data && !data.error) {
      this.users = data;
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else {
      this.findMembers = false;
      await this.globalSer.dismissLoading();
    }
  }

  // actions and validations
  validateData(): string|null {
    if (!checkTitlesOrDescriptions(this.formData.name))
      return 'Disculpe, pero debe indicar un nombre correcto para el grupo.';
    if (!checkCodeValue(this.formData.code))
      return 'Disculpe, pero debe indicar el código para el grupo.';

    return null;
  }

  async back() {
    await this.navCtrl.back();
  }

  async showFindUsers() {
    this.users = [];
    this.selectedUsers = [];
    this.findMembers = !this.findMembers;
    if (this.findMembers) await this.findMembersList();
    else this.queryParams.word = null;
  }

  addToSelected(id: string) {
    const user = this.users.find(u => u._id === id);
    if (user) {
      this.selectedUsers.push(user);
      this.selectedUsersIds.push(id);
    }
  }

  removeOfSelected(id: string) {
    this.selectedUsers = this.selectedUsers.filter(s => s._id !== id);
    this.selectedUsersIds = this.selectedUsersIds.filter(u => u !== id);
  }

  checkAdded(id: string) {
    return this.selectedUsersIds.indexOf(id) > -1;
  }

  async editEnable(edited = false) {
    if (!edited) await this.globalSer.presentLoading();

    this.edit = !this.edit;

    if (this.edit) {
      this.formData = {
        _id: this.group._id,
        name: this.group.name,
        code: this.group.code,
      };
      this.title = `Editar datos de: ${this.formData.name}`;
    }
    else {
      this.title = `Detalles: ${this.group.name}`;
      this.formData = null;
    }

    if (!edited) await this.globalSer.dismissLoading();
  }

  // alerts
  async confirmSaveNewMembers() {
    if (this.selectedUsers.length > 0) {
      let message = `¿Está seguro qué desea agergar a estos nuevos miembros?`;

      for (const m of this.selectedUsers) {
        message += `<br/><br/>- <b>${m.names} ${m.lastNames}</b> - <i>${m.document}</i>`;
      }

      const alert = await this.alertCtrl.create({
        cssClass: 'max-width-640',
        header: 'Agregar miembros',
        message,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
            }
          }, {
            text: 'Sí',
            handler: () => {
              this.addOrRemoveMembersGroup('add');
            }
          }
        ]
      });
      await alert.present();
    }
    else {
      await this.globalSer.presentAlert('Alerta', 'Nada que agregar.');
      this.showFindUsers();
    }
  }

  async confirmRemoveMember(id: string) {
    const alert = await this.alertCtrl.create({
      header: 'Confirme',
      message: `¿Está seguro qué desea remover a este usuario de este grupo?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'Sí',
          handler: () => {
            this.group.members = this.group.members.filter(m => m._id !== id);
            this.addOrRemoveMembersGroup('remove');
          }
        }
      ]
    });
    await alert.present();
  }

  async confirmUpdate() {
    const validated = this.validateData();

    if (!validated) {
      this.formData.name = this.formData.name.trim();
      this.formData.code = this.formData.code.trim();
      const alert = await this.alertCtrl.create({
        header: 'Confirme',
        message: '¿Está seguro qué desea actualizar información de este grupo?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {}
          }, {
            text: 'Sí',
            handler: () => { this.updateData(); }
          }
        ]
      });
      await alert.present();
    }
    else {
      await this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe completar el formulario.');
    }
  }

  async confirmDelete() {
    const alert = await this.alertCtrl.create({
      header: 'Confirme',
      message: `¿Está seguro qué desea borrar a este grupo?
        <br/><br/>
        NOTA: Todos los miembros asociados volverán a estar disponibles para ser reasignados.
      `,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'Sí',
          handler: () => { this.deleteGroup(); }
        }
      ]
    });
    await alert.present();
  }

}
