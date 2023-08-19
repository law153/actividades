import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'ini-sesion',
    loadChildren: () => import('./pages/base/ini-sesion/ini-sesion.module').then( m => m.IniSesionPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./pages/base/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'contactanos',
    loadChildren: () => import('./pages/base/contactanos/contactanos.module').then( m => m.ContactanosPageModule)
  },
  {
    path: 'herramientas',
    loadChildren: () => import('./pages/base/herramientas/herramientas.module').then( m => m.HerramientasPageModule)
  },
  {
    path: 'gasfiteria',
    loadChildren: () => import('./pages/base/gasfiteria/gasfiteria.module').then( m => m.GasfiteriaPageModule)
  },
  {
    path: 'electricidad',
    loadChildren: () => import('./pages/base/electricidad/electricidad.module').then( m => m.ElectricidadPageModule)
  },
  {
    path: 'seguridad',
    loadChildren: () => import('./pages/base/seguridad/seguridad.module').then( m => m.SeguridadPageModule)
  },
  {
    path: 'ropa',
    loadChildren: () => import('./pages/base/ropa/ropa.module').then( m => m.RopaPageModule)
  },
  {
    path: 'fijaciones',
    loadChildren: () => import('./pages/base/fijaciones/fijaciones.module').then( m => m.FijacionesPageModule)
  },
  {
    path: 'kits',
    loadChildren: () => import('./pages/base/kits/kits.module').then( m => m.KitsPageModule)
  },
  {
    path: 'gasfiteria-p',
    loadChildren: () => import('./pages/base/gasfiteria-p/gasfiteria-p.module').then( m => m.GasfiteriaPPageModule)
  },
  {
    path: 'electricidad-p',
    loadChildren: () => import('./pages/base/electricidad-p/electricidad-p.module').then( m => m.ElectricidadPPageModule)
  },
  {
    path: 'seguridad-p',
    loadChildren: () => import('./pages/base/seguridad-p/seguridad-p.module').then( m => m.SeguridadPPageModule)
  },
  {
    path: 'ropa-p',
    loadChildren: () => import('./pages/base/ropa-p/ropa-p.module').then( m => m.RopaPPageModule)
  },
  {
    path: 'fijaciones-p',
    loadChildren: () => import('./pages/base/fijaciones-p/fijaciones-p.module').then( m => m.FijacionesPPageModule)
  },
  {
    path: 'kits-p',
    loadChildren: () => import('./pages/base/kits-p/kits-p.module').then( m => m.KitsPPageModule)
  },
  {
    path: 'herramientas-p',
    loadChildren: () => import('./pages/base/herramientas-p/herramientas-p.module').then( m => m.HerramientasPPageModule)
  },  
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
