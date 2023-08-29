import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  //funciones de redirección

  //home
  irHome(){
    this.router.navigate([''])    
  }

  //Miscelanio
  irIni(){
    this.router.navigate(['/ini-sesion']);
  }
  irRegistro(){
    this.router.navigate(['/registrarse']);
  }
  irContactanos(){
    this.router.navigate(['/contactanos']);
  }

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

  irProdCli(){
    this.router.navigate(['/herramientas-p-cli']);
  }

  irProdAdm(){
    this.router.navigate(['/herramientas-p-adm']);
  }

  irAgregar(){
    this.router.navigate(['/agregar-prod']);
  }

}
