import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cambiar-contra-adm',
  templateUrl: './cambiar-contra-adm.page.html',
  styleUrls: ['./cambiar-contra-adm.page.scss'],
})
export class CambiarContraAdmPage implements OnInit {

  claveOld: string= "";
  claveNueva: string="";
  claveRep: string="";
  flag: boolean=true;
  msj: string = "";

  constructor(private router: Router,private menuCtrl: MenuController, private alerta: AlertController) { }

  irHomeAdm(){
    this.router.navigate(['home-adm']);
  }

  irHome(){
    this.router.navigate(['']);
  }
  //Funciones de menu

  //abrir menus
  abrirSuperior(){
    this.menuCtrl.enable(true, 'superior');
    this.menuCtrl.open('superior');
  }

  abrirCategorias(){
    this.menuCtrl.enable(true, 'categorias');
    this.menuCtrl.open('categorias');
  }


  //Validaciones
  envioValido(){
    this.claveOldValida();
    this.claveNuevaValida();
    this.claveRepValid();
    if(this.flag === true){
      this.msj="Contraseña cambiada correctamente";
      this.irHome();
    }
  }

  claveOldValida() {
    if (!this.contieneMayuscula(this.claveOld)) {
      this.flag = false;
      this.msj = "La contraseña debe poseer una mayúscula";
      this.presentAlert(this.msj);
    } else if (!this.contieneMinuscula(this.claveOld)) {
      this.flag = false;
      this.msj = "La contraseña debe poseer una minúscula";
      this.presentAlert(this.msj);
    } else if (!this.contieneNumero(this.claveOld)) {
      this.flag = false;
      this.msj = "La contraseña debe poseer un número";
      this.presentAlert(this.msj);
    } else if (!this.contieneCaracterEspecial(this.claveOld)) {
      this.flag = false;
      this.msj = "La contraseña debe poseer un carácter especial";
      this.presentAlert(this.msj);
    } else if (this.claveOld.length <= 8) {
      this.flag = false;
      this.msj = "La contraseña debe tener al menos 8 caracteres de longitud";
      this.presentAlert(this.msj);
    }
  }

  claveNuevaValida() {
    if (!this.contieneMayuscula(this.claveNueva)) {
      this.flag = false;
      this.msj = "La contraseña debe poseer una mayúscula";
      this.presentAlert(this.msj);
    } else if (!this.contieneMinuscula(this.claveNueva)) {
      this.flag = false;
      this.msj = "La contraseña debe poseer una minúscula";
      this.presentAlert(this.msj);
    } else if (!this.contieneNumero(this.claveNueva)) {
      this.flag = false;
      this.msj = "La contraseña debe poseer un número";
      this.presentAlert(this.msj);
    } else if (!this.contieneCaracterEspecial(this.claveNueva)) {
      this.flag = false;
      this.msj = "La contraseña debe poseer un carácter especial";
      this.presentAlert(this.msj);
    } else if (this.claveNueva.length <= 8) {
      this.flag = false;
      this.msj = "La contraseña debe tener al menos 8 caracteres de longitud";
      this.presentAlert(this.msj);
    }
  }

  claveRepValid(){
    if(this.claveRep != this.claveNueva){
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
