import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./views/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'familias',
    loadChildren: () => import('./views/familias/familias.module').then( m => m.FamiliasPageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./views/eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./views/cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'curso',
    loadChildren: () => import('./views/curso/curso.module').then( m => m.CursoPageModule)
  },
  {
    path: 'clasevideo',
    loadChildren: () => import('./views/clasevideo/clasevideo.module').then( m => m.ClasevideoPageModule)
  },
  {
    path: 'claseexamen',
    loadChildren: () => import('./views/claseexamen/claseexamen.module').then( m => m.ClaseexamenPageModule)
  },
  {
    path: 'clase',
    loadChildren: () => import('./views/clase/clase.module').then( m => m.ClasePageModule)
  },
  {
    path: 'ofrendas',
    loadChildren: () => import('./views/ofrendas/ofrendas.module').then( m => m.OfrendasPageModule)
  },
  {
    path: 'informes',
    loadChildren: () => import('./views/informes/informes.module').then( m => m.InformesPageModule)
  },
  {
    path: 'miembros',
    loadChildren: () => import('./views/miembros/miembros.module').then( m => m.MiembrosPageModule)
  },
  {
    path: 'modal-curso',
    loadChildren: () => import('./views/modal-curso/modal-curso.module').then( m => m.ModalCursoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
