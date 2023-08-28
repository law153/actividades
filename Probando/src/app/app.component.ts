import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  usuario: number = 0 //0 = sin cuenta; 1 = cliente; 2 = admin
  constructor(private router: Router) {}

  //funciones de redirección

  //home

  //Base ------------------------------------------------------------------

  //Superior
  irIni(){
    this.router.navigate(['/ini-sesion']);
  }
  irRegistro(){
    this.router.navigate(['/registrarse']);
  }
  irContactanos(){
    this.router.navigate(['/contactanos']);
  }

  //categorias
  irHerramientas(){
    this.router.navigate(['/herramientas']);
  }

  irFijaciones(){
    this.router.navigate(['/fijaciones']);
  }

  irElectricidad(){
    this.router.navigate(['/electricidad']);
  }

  irSeguridad(){
    this.router.navigate(['/seguridad']);
  }

  irRopa(){
    this.router.navigate(['/ropa']);
  }

  irGasfiteria(){
    this.router.navigate(['/gasfiteria']);
  }

  irKits(){
    this.router.navigate(['/kits']);
  }

  //Cliente ------------------------------------------------------------------------

  //Superior
  irPerfil(){
    this.router.navigate(['/perfil']);
  }
  irCarrito(){
    this.router.navigate(['/carrito']);
  }
  irContactanosCli(){
    this.router.navigate(['/contactanos-cli']);
  }
  cerrarSesion(){
    this.router.navigate(['']);
  }

  //categorias
  irHerramientasCli(){
    this.router.navigate(['/herramientas-cli']);
  }

  irFijacionesCli(){
    this.router.navigate(['/fijaciones-cli']);
  }

  irElectricidadCli(){
    this.router.navigate(['/electricidad-cli']);
  }

  irSeguridadCli(){
    this.router.navigate(['/seguridad-cli']);
  }

  irRopaCli(){
    this.router.navigate(['/ropa-cli']);
  }

  irGasfiteriaCli(){
    this.router.navigate(['/gasfiteria-cli']);
  }

  irKitsCli(){
    this.router.navigate(['/kits-cli']);
  }

  //Admin ------------------------------------------------------------------------

  //Superior
  irPerfilAdm(){
    this.router.navigate(['/perfil-adm']);
  }
  irRoles(){
    this.router.navigate(['/editar-rol']);
  }
  irConsultas(){
    this.router.navigate(['/consultas']);
  }
  irPedidos(){
    this.router.navigate(['/listado-pedido']);
  }

  //categorias
  irHerramientasAdm(){
    this.router.navigate(['/herramientas-adm']);
  }

  irFijacionesAdm(){
    this.router.navigate(['/fijaciones-adm']);
  }

  irElectricidadAdm(){
    this.router.navigate(['/electricidad-adm']);
  }

  irSeguridadAdm(){
    this.router.navigate(['/seguridad-adm']);
  }

  irRopaAdm(){
    this.router.navigate(['/ropa-adm']);
  }

  irGasfiteriaAdm(){
    this.router.navigate(['/gasfiteria-adm']);
  }

  irKitsAdm(){
    this.router.navigate(['/kits-adm']);
  }


}
