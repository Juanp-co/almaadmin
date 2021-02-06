import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'mail' },
    { title: 'Miembros', url: '/miembros', icon: 'paper-plane' },
    { title: 'Familiar', url: '/familias', icon: 'paper-plane' },
    { title: 'Cursos', url: '/cursos', icon: 'heart' },
    { title: 'Eventos', url: '/eventos', icon: 'archive' },
    { title: 'Ofrendas', url: '/ofrendas', icon: 'trash' },
    { title: 'Informes', url: '/informes', icon: 'warning' },
  ]

  constructor(
    public alertCtrl:AlertController
  ) {}


  ingresar(){
    this.presentAlertPrompt()
  }

  salir(){

  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Iniciar sesión',
      inputs: [
        {
          name: 'usuario',
          type: 'text',
          placeholder: 'Nombre de usuario'
        },
        {
          name: 'contraseña',
          type: 'password',
          placeholder: 'Contraseña'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (data) => {
            console.log('Confirm Cancel', data);
          }
        }, {
          text: 'Ingresar',
          handler: (data) => {
            console.log('Confirm Ok', data);
          }
        }
      ]
    });

    await alert.present();
  }

}
