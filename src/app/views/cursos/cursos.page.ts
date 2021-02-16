import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ModalCursoPage } from '../modal-curso/modal-curso.page';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  cursos:Array<any> = [{},{},{},{},{},{},{},{}]

  constructor(
    public modalController:ModalController,
    public navCtrl:NavController
  ) { }

  ngOnInit() {

  }

  async presentModal(curso?) {
    const modal = await this.modalController.create({
      component: ModalCursoPage,
      componentProps: {
        'curso': curso ? curso : null
      }
    });
    modal.present()
    const { data } = await modal.onWillDismiss();
    console.log(data);
  }

  irCurso(id){
    this.navCtrl.navigateForward(`curso/${id}`)
  }


}
