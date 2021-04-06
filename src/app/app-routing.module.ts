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
    path: 'ofrendas',
    loadChildren: () => import('./views/ofrendas/ofrendas.module').then( m => m.OfrendasPageModule)
  },
  // {
  //   path: 'informes',
  //   loadChildren: () => import('./views/informes/informes.module').then( m => m.InformesPageModule)
  // },
  {
    path: 'miembros',
    loadChildren: () => import('./views/miembros/miembros.module').then( m => m.MiembrosPageModule)
  },
  {
    path: 'ingresar',
    loadChildren: () => import('./views/ingresar/ingresar.module').then( m => m.IngresarPageModule)
  },
  {
    path: 'cuentas-bancarias',
    loadChildren: () => import('./views/cuentas-bancarias/cuentas-bancarias.module').then( m => m.CuentasBancariasPageModule)
  },
  {
    path: 'mi-cuenta',
    loadChildren: () => import('./views/mi-cuenta/mi-cuenta.module').then( m => m.MiCuentaPageModule)
  },
  {
    path: 'grupos-familiares',
    loadChildren: () => import('./views/grupos-familiares/grupos-familiares.module').then( m => m.GruposFamiliaresPageModule)
  },
  {
    path: 'consolidados',
    loadChildren: () => import('./views/consolidados/consolidados.module').then( m => m.ConsolidadosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
