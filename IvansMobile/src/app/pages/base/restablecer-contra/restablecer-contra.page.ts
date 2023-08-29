import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer-contra',
  templateUrl: './restablecer-contra.page.html',
  styleUrls: ['./restablecer-contra.page.scss'],
})
export class RestablecerContraPage implements OnInit {
  clave: string="";
  claveRep: string="";
  flag: boolean=true;
  msj: string = "";

  constructor(private menuCtrl: MenuController, private router: Router, private alerta: AlertController) { }

  irHome(){
    this.router.navigate(['']);
  }

  irCli(){
    this.router.navigate(['/home-cli']);
  }

  irAdm(){
    this.router.navigate(['/home-adm']);
  }

  abrirSuperior(){
    this.menuCtrl.enable(true, 'superior');
    this.menuCtrl.open('superior');
  }

  abrirCategorias(){
    this.menuCtrl.enable(true, 'categorias');
    this.menuCtrl.open('categorias');
  }

  irIniSesion(){
    this.router.navigate(['/ini-sesion']);
  }

  //Validaciones
  envioValido(){
    this.claveValida();
    this.claveRepValid();
    if(this.flag === true){
      this.msj="Contraseña cambiada correctamente";
      this.irIniSesion();
    }
  }

  claveValida() {
    if (!this.contieneMayuscula(this.clave)) {
      this.flag = false;
      this.msj = "La contraseña debe poseer una mayúscula";
      this.presentAlert(this.msj);
    } else if (!this.contieneMinuscula(this.clave)) {
      this.flag = false;
      this.msj = "La contraseña debe poseer una minúscula";
      this.presentAlert(this.msj);
    } else if (!this.contieneNumero(this.clave)) {
      this.flag = false;
      this.msj = "La contraseña debe poseer un número";
      this.presentAlert(this.msj);
    } else if (!this.contieneCaracterEspecial(this.clave)) {
      this.flag = false;
      this.msj = "La contraseña debe poseer un carácter especial";
      this.presentAlert(this.msj);
    } else if (this.clave.length <= 8) {
      this.flag = false;
      this.msj = "La contraseña debe tener al menos 8 caracteres de longitud";
      this.presentAlert(this.msj);
    }
  }

  claveRepValid(){
    if(this.claveRep != this.clave){
      this.flag = false;
      this.msj="La contraseña no se ha repetido correctamente";
      this.presentAlert(this.msj);
    }
  }

  //Funciones de validación
  

  contieneMayuscula(texto: string): boolean {
    return /[A-Z]/.test(texto);
  }
  
  // Función para verificar si una cadena contiene al menos una minúscula
   contieneMinuscula(texto: string): boolean {
    return /[a-z]/.test(texto);
  }
  
  // Función para verificar si una cadena contiene al menos un carácter especial
  contieneCaracterEspecial(texto: string): boolean {
    return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(texto);
  }
  
  // Función para verificar si una cadena contiene al menos un número
  contieneNumero(texto: string): boolean {
    return /\d/.test(texto);
  }

  async presentAlert(mensaje: string) {
    const alert = await this.alerta.create({
      header: 'Alerta',
      subHeader: 'Mensaje importante',
      message: mensaje,
      buttons: ['Vale'],
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
