import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modal-curso',
  templateUrl: './modal-curso.page.html',
  styleUrls: ['./modal-curso.page.scss'],
})
export class ModalCursoPage implements OnInit {

  @Input() curso: any;
  titulo:string;
  img = "assets/photo.png"

  constructor(
    public modalCtrl:ModalController,
    public datos:DataService
  ) { }

  ngOnInit() {

    this.titulo = this.curso ? 'Editar' : 'Nuevo'

  }

  cerrar(){
    this.modalCtrl.dismiss()
  }

  openFile(event) {
    let files = event.target.files;
    if (typeof files[0] !== 'object') return false;
    this.datos.resizePhoto(files[0], 900, 'dataURL',  (resizedFile) => {
      this.img = resizedFile;
    })
  }

}
