import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ModalCursoPage } from '../modal-curso/modal-curso.page';
import {GlobalService} from '../../services/global.service';
import {AxiosService} from '../../services/axios.service';
import {CookiesService} from '../../services/cookies.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  cursos:Array<any> = [{},{},{},{},{},{},{},{}]

  ngOnInit() {

  }

  constructor(
    private axios: AxiosService,
    private cookieService: CookiesService,
    private globalSer: GlobalService,
    private modalController: ModalController,
    private navCtrl: NavController,
    private router: Router,
  ) {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/ingresar']);
  }

  async ionViewWillEnter() {
    if (!this.globalSer.checkSession())
      this.router.navigate(['/ingresar']);
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
  }

  irCurso(id){
    this.navCtrl.navigateForward(`curso/${id}`)
  }

}
