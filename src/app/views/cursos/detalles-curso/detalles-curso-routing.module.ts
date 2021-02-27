import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesCursoPage } from './detalles-curso.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesCursoPage
  },
  {
    path: 'modal-editar-tema',
    loadChildren: () => import('./modal-editar-tema/modal-editar-tema.module').then( m => m.ModalEditarTemaPageModule)
  },
  {
    path: 'modal-editar-contenido',
    loadChildren: () => import('./modal-editar-contenido/modal-editar-contenido.module').then( m => m.ModalEditarContenidoPageModule)
  },
  {
    path: 'modal-preview-tema',
    loadChildren: () => import('./modal-preview-tema/modal-preview-tema.module').then( m => m.ModalPreviewTemaPageModule)
  },
  {
    path: 'modal-editar-pregunta',
    loadChildren: () => import('./modal-editar-pregunta/modal-editar-pregunta.module').then( m => m.ModalEditarPreguntaPageModule)
  },
  {
    path: 'modal-preview-prueba',
    loadChildren: () => import('./modal-preview-prueba/modal-preview-prueba.module').then( m => m.ModalPreviewPruebaPageModule)
  },
  {
    path: 'modal-cursos-previos',
    loadChildren: () => import('./modal-cursos-previos/modal-cursos-previos.module').then( m => m.ModalCursosPreviosPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesCursoPageRoutingModule {}
