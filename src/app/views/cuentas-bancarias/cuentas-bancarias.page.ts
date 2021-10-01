import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {CuentasBancariasService} from './cuentas-bancarias.service';
import {AxiosService} from '../../services/axios.service';
import {DataService} from '../../services/data.service';
import {GlobalService} from '../../services/global.service';
import {checkBase64, checkTitlesOrDescriptions, setSaltLinesOrBr} from '../../../Utils/validations.functions';

@Component({
  selector: 'app-cuentas-bancarias',
  templateUrl: './cuentas-bancarias.page.html',
  styleUrls: ['./cuentas-bancarias.page.scss'],
})
export class CuentasBancariasPage implements OnInit {

  banks: any[] = [];
  formData: any = {
    _id: null,
    title: null,
    description: null,
    picture: null,
  };
  Editor = ClassicEditor;
  configEditor: any = null;
  edit = false;
  showAddButton = false;

  constructor(
    private alertCtrl: AlertController,
    private axios: AxiosService,
    private cuentaBancariasService: CuentasBancariasService,
    private dataService: DataService,
    private globalSer: GlobalService,
    private router: Router,
  ) {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/ingresar']);
    else {
      this.configEditor = this.globalSer.configEditor;
      this.configEditor.placeholder = 'Indica los datos bancarios aquí (*) ...';
    }
  }

  async ngOnInit() {
    this.showAddButton = this.globalSer.checkRoleToEnableAddOrUpdate();
    await this.getBanks();
  }

  async ionViewWillEnter() {
    if (!this.globalSer.checkSession()) await this.router.navigate(['/ingresar']);
  }

  async getBanks() {
    await this.globalSer.presentLoading();
    const data: any = await this.cuentaBancariasService.getBanks();

    if (data && !data.error) {
      this.banks = data;
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async saveBanks() {
    await this.globalSer.presentLoading();
    const data: any = await this.cuentaBancariasService.saveBank(this.formData);

    if (data && !data.error) {
      this.banks.push(data);
      this.showForm({ clean: true });
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', 'Se ha guardado la cuenta bancaria exitosamente.');
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async updateBanks(id: string|null = null) {
    if (id) {
      await this.globalSer.presentLoading();
      const data: any = await this.cuentaBancariasService.updateBank(id, this.formData);

      if (data && !data.error) {
        const index = this.banks.findIndex(b => b._id === id);

        if (index > -1) {
          this.banks[index].title = data.title;
          this.banks[index].description = data.description;
          this.banks[index].picture = data.picture;
        }
        else this.banks.push(data);
        this.showForm({ clean: true });
        await this.globalSer.dismissLoading();
        await this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado la cuenta bancaria exitosamente.');
      }
      else if (data && data.error) {
        await this.globalSer.dismissLoading();
        await this.globalSer.errorSession();
      }
      else await this.globalSer.dismissLoading();
    }
    else
      await this.globalSer.presentAlert(
        'Error',
        'Disculpe, pero ha ocurrido un error al momento de obtener la información a actualizar.'
      );
  }

  async deleteBank(id: string|null = null) {
    if (id) {
      await this.globalSer.presentLoading();
      const data: any = await this.cuentaBancariasService.deleteBank(id);

      if (data && !data.error) {
        this.banks = this.banks.filter(b => b._id !== id);
        await this.globalSer.dismissLoading();
        await this.globalSer.presentAlert('¡Éxito!', 'Se ha eliminado la cuenta bancaria exitosamente.');
      }
      else if (data && data.error) {
        await this.globalSer.dismissLoading();
        await this.globalSer.errorSession();
      }
      else await this.globalSer.dismissLoading();
    }
    else
      await this.globalSer.presentAlert(
        'Error',
        'Disculpe, pero ha ocurrido un error al momento de obtener la información a actualizar.'
      );
  }

  // getters and setters
  // actions form
  openFile(event) {
    const files = event.target.files;

    if (typeof files[0] !== 'object') return false;
    else {
      this.dataService.resizePhoto(files[0], 900, 'dataURL',  (resizedFile) => {
        this.formData.picture = resizedFile;
      });
    }
  }

  showForm({ id, clean }: { id?: string|null, clean: boolean }) {
    if (clean) {
      this.formData._id = null;
      this.formData.title = null;
      this.formData.description = null;
      this.formData.picture = null;
    }

    if (id) {
      const data = this.banks.find(b => b._id === id);
      if (data) {
        this.formData._id = data._id;
        this.formData.title = data.title;
        this.formData.description = data.description;
        this.formData.picture = data.picture;
      }
    }
    this.edit = !this.edit;
  }

  async showDetails(id: string) {
    const bank = this.banks.find(b => b._id === id);

    if (bank) {
      const buttons = this.showAddButton ?
        [
          {
            text: 'Eliminar',
            handler: () => this.confirmForm(id, true)
          },
          {
            text: 'Editar',
            handler: () => this.showForm({ id, clean: true })
          },
        ]
        : [];
      buttons.push({
        text: 'Cerrar',
        // role: 'cancel',
        handler: () => { }
      });

      const message = `<img src="${bank.picture}" alt="bank_img" class="max-height-pic"> <br/>${setSaltLinesOrBr(bank.description, true)}`;

      const alert = await this.alertCtrl.create({
        cssClass: 'max-width-640',
        header: bank.title,
        message,
        buttons
      });

      await alert.present();
    }
  }

  // confirms
  validate() {
    if (!checkTitlesOrDescriptions(this.formData.title)) return 'Disculpe, pero debe indicar el nombre del banco.';
    if (!this.formData.description || (this.formData.description && this.formData.description.length <= 5))
      return 'Disculpe, pero debe indicar los datos bancarios correctamente.';
    else if (!this.formData.picture && !checkBase64(this.formData.picture))
      return 'Disculpe, pero debe indicar una imagen para el banco.';

    return null;
  }

  async confirmForm(id: string|null = null, remove = false) {
    let message = '¿Está seguro qué desea __ACTION__ esta información?';
    let next = false;

    if (!remove) {
      const validated = this.validate();

      if (!validated) {
        next = true;
        message = message.replace('__ACTION__', id ? 'actualizar' : 'agregar');
      }
      else {
        await this.globalSer.presentAlert(
          'Error',
          validated || 'Disculpe, pero debe completar el formulario.'
        );
      }
    }
    else message = message.replace('__ACTION__', 'borrar');

    if (next) {
      await this.globalSer.alertConfirm({
        header: 'Confirme',
        message,
        confirmAction: () => {
          if (!id) this.saveBanks();
          else if (id && !remove) this.updateBanks(id);
          else this.deleteBank(id);
        }
      });
    }
  }

}
