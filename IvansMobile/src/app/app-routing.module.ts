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
    path: 'olv-contra',
    loadChildren: () => import('./pages/base/olv-contra/olv-contra.module').then( m => m.OlvContraPageModule)
  },
  {
    path: 'restablecer-contra',
    loadChildren: () => import('./pages/base/restablecer-contra/restablecer-contra.module').then( m => m.RestablecerContraPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/cliente/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'editar-perfil',
    loadChildren: () => import('./pages/cliente/editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  },
  {
    path: 'cambiar-contra',
    loadChildren: () => import('./pages/cliente/cambiar-contra/cambiar-contra.module').then( m => m.CambiarContraPageModule)
  },
  {
    path: 'contactanos-cli',
    loadChildren: () => import('./pages/cliente/contactanos-cli/contactanos-cli.module').then( m => m.ContactanosCliPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/cliente/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'historial-compra',
    loadChildren: () => import('./pages/cliente/historial-compra/historial-compra.module').then( m => m.HistorialCompraPageModule)
  },
  {
    path: 'home-cli',
    loadChildren: () => import('./pages/cliente/home-cli/home-cli.module').then( m => m.HomeCliPageModule)
  },
  {
    path: 'home-adm',
    loadChildren: () => import('./pages/admin/home-adm/home-adm.module').then( m => m.HomeAdmPageModule)
  },
  {
    path: 'editar-rol',
    loadChildren: () => import('./pages/admin/editar-rol/editar-rol.module').then( m => m.EditarRolPageModule)
  },
  {
    path: 'consultas',
    loadChildren: () => import('./pages/admin/consultas/consultas.module').then( m => m.ConsultasPageModule)
  },
  {
    path: 'listado-pedido',
    loadChildren: () => import('./pages/admin/listado-pedido/listado-pedido.module').then( m => m.ListadoPedidoPageModule)
  },
  {
    path: 'pedido',
    loadChildren: () => import('./pages/admin/pedido/pedido.module').then( m => m.PedidoPageModule)
  },
  {
    path: 'cambiar-contra-adm',
    loadChildren: () => import('./pages/admin/cambiar-contra-adm/cambiar-contra-adm.module').then( m => m.CambiarContraAdmPageModule)
  },
  {
    path: 'ver-compra',
    loadChildren: () => import('./pages/cliente/ver-compra/ver-compra.module').then( m => m.VerCompraPageModule)
  },
  {
    path: 'agregar-prod',
    loadChildren: () => import('./pages/admin/agregar-prod/agregar-prod.module').then( m => m.AgregarProdPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./pages/base/categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./pages/base/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'editar-prod',
    loadChildren: () => import('./pages/admin/editar-prod/editar-prod.module').then( m => m.EditarProdPageModule)
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
