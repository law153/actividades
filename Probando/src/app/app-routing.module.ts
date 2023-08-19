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
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
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
<<<<<<< Updated upstream
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
=======
    path: 'contactanos',
    loadChildren: () => import('./pages/base/contactanos/contactanos.module').then( m => m.ContactanosPageModule)
>>>>>>> Stashed changes
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
