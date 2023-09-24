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
    path: 'herramientas-cli',
    loadChildren: () => import('./pages/cliente/herramientas-cli/herramientas-cli.module').then( m => m.HerramientasCliPageModule)
  },
  {
    path: 'electricidad-cli',
    loadChildren: () => import('./pages/cliente/electricidad-cli/electricidad-cli.module').then( m => m.ElectricidadCliPageModule)
  },
  {
    path: 'gasfiteria-cli',
    loadChildren: () => import('./pages/cliente/gasfiteria-cli/gasfiteria-cli.module').then( m => m.GasfiteriaCliPageModule)
  },
  {
    path: 'fijaciones-cli',
    loadChildren: () => import('./pages/cliente/fijaciones-cli/fijaciones-cli.module').then( m => m.FijacionesCliPageModule)
  },
  {
    path: 'seguridad-cli',
    loadChildren: () => import('./pages/cliente/seguridad-cli/seguridad-cli.module').then( m => m.SeguridadCliPageModule)
  },
  {
    path: 'ropa-cli',
    loadChildren: () => import('./pages/cliente/ropa-cli/ropa-cli.module').then( m => m.RopaCliPageModule)
  },
  {
    path: 'kits-cli',
    loadChildren: () => import('./pages/cliente/kits-cli/kits-cli.module').then( m => m.KitsCliPageModule)
  },
  {
    path: 'herramientas-p-cli',
    loadChildren: () => import('./pages/cliente/herramientas-p-cli/herramientas-p-cli.module').then( m => m.HerramientasPCliPageModule)
  },
  {
    path: 'electricidad-p-cli',
    loadChildren: () => import('./pages/cliente/electricidad-p-cli/electricidad-p-cli.module').then( m => m.ElectricidadPCliPageModule)
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
    path: 'perfil-adm',
    loadChildren: () => import('./pages/admin/perfil-adm/perfil-adm.module').then( m => m.PerfilAdmPageModule)
  },
  {
    path: 'editar-perfil-adm',
    loadChildren: () => import('./pages/admin/editar-perfil-adm/editar-perfil-adm.module').then( m => m.EditarPerfilAdmPageModule)
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
    path: 'herramientas-adm',
    loadChildren: () => import('./pages/admin/herramientas-adm/herramientas-adm.module').then( m => m.HerramientasAdmPageModule)
  },
  {
    path: 'electricidad-adm',
    loadChildren: () => import('./pages/admin/electricidad-adm/electricidad-adm.module').then( m => m.ElectricidadAdmPageModule)
  },
  {
    path: 'fijaciones-adm',
    loadChildren: () => import('./pages/admin/fijaciones-adm/fijaciones-adm.module').then( m => m.FijacionesAdmPageModule)
  },
  {
    path: 'seguridad-adm',
    loadChildren: () => import('./pages/admin/seguridad-adm/seguridad-adm.module').then( m => m.SeguridadAdmPageModule)
  },
  {
    path: 'ropa-adm',
    loadChildren: () => import('./pages/admin/ropa-adm/ropa-adm.module').then( m => m.RopaAdmPageModule)
  },
  {
    path: 'gasfiteria-adm',
    loadChildren: () => import('./pages/admin/gasfiteria-adm/gasfiteria-adm.module').then( m => m.GasfiteriaAdmPageModule)
  },
  {
    path: 'kits-adm',
    loadChildren: () => import('./pages/admin/kits-adm/kits-adm.module').then( m => m.KitsAdmPageModule)
  },
  {
    path: 'herramientas-p-adm',
    loadChildren: () => import('./pages/admin/herramientas-p-adm/herramientas-p-adm.module').then( m => m.HerramientasPAdmPageModule)
  },
  {
    path: 'electricidad-p-adm',
    loadChildren: () => import('./pages/admin/electricidad-p-adm/electricidad-p-adm.module').then( m => m.ElectricidadPAdmPageModule)
  },
  {
    path: 'fijaciones-cli-p',
    loadChildren: () => import('./pages/cliente/fijaciones-cli-p/fijaciones-cli-p.module').then( m => m.FijacionesCliPPageModule)
  },
  {
    path: 'fijaciones-adm-p',
    loadChildren: () => import('./pages/admin/fijaciones-adm-p/fijaciones-adm-p.module').then( m => m.FijacionesAdmPPageModule)
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
