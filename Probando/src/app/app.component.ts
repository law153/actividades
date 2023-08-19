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

}
