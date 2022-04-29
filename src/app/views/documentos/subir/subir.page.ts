import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {DocumentosService} from '../documentos.service';
import {DataService} from '../../../services/data.service';
import {GlobalService} from '../../../services/global.service';

@Component({
  selector: 'app-subir',
  templateUrl: './subir.page.html',
  styleUrls: ['./subir.page.scss'],
})
export class SubirPage implements OnInit {

  formData: any = {
    title: '',
    file: null,
    fileName: null,
    rolesList: [],
    rolesSelected: ''
  };
  roles = [
    'Administradores',
    'Pastores',
    'Supervisores',
    'Líderes'
  ];

  constructor(
    private dataService: DataService,
    private documentosService: DocumentosService,
    private globalSer: GlobalService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  async saveDocument() {
    await this.globalSer.presentLoading();
    const data: any = await this.documentosService.saveResources(this.formData);

    if (data && !data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', 'Se ha compartido el documento exitosamente.');
      this.goBack();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async goBack() {
    await this.navCtrl.back();
  }

  openFile(event) {
    if (typeof event.target?.files[0] !== 'object') return;
    else {
      const fileToLoad = event.target.files[0];
      const fileReader = new FileReader();
      fileReader.onload = (fileLoadedEvent) => {
        this.formData.file = fileLoadedEvent.target.result;
        this.formData.fileName = fileToLoad.name;
      };
      // Convert data to base64
      fileReader.readAsDataURL(fileToLoad);
    }
  }

  setFormData(input: string, ev: any) {
    this.formData[input] = ev.target.value || null;
  }

  getRoles(rolesList: number[]): string {
    let ret = '';
    if (rolesList.length === 4) ret = 'Todos';
    else if (rolesList.length > 0) {
      for (const v of rolesList) {
        if (ret === '') ret = this.roles[v];
        else ret += `, ${this.roles[v]}`;
      }
    }

    return ret;
  }

  async showAlertRolesList() {
    const inputs: any[] = [];

    for (const [index, value] of this.roles.entries()) {
      inputs.push({
        name: `roles`,
        type: 'checkbox',
        label: value,
        value: index,
        checked: this.formData.rolesList.includes(index),
      });
    }
    await this.globalSer.alertWithList({
      header: 'Seleccione',
      inputs,
      confirmAction: (selectedValue) => {
        this.formData.rolesList = selectedValue;
        this.formData.rolesSelected = this.getRoles(selectedValue);
      }
    });
  }

  async validate() {
    let msg: string | null = null;

    if (!this.formData.file) msg = 'Disculpe, pero debe cargar el archivo PDF a compartir.';
    else if (this.formData.title.length < 4) msg = 'Disculpe, pero debe indicar un título al archivo que va a compartir.';
    else if (this.formData.rolesList.length === 0)
      msg = 'Disculpe, pero debe indicar a que tipos de usuario se le compartirá el documento.';

    if (msg) this.globalSer.presentAlert('¡Error!', msg || 'Disculpe, pero debe completar el formulario.');
    else this.confirmAction();
  }

  async confirmAction() {
    await this.globalSer.alertConfirm({
      header: '¡Confirme!',
      message: '¿Está seguro qué desea subir este documento?',
      confirmAction: () => this.saveDocument()
    });
  }

}
