import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-contactanos-cli',
  templateUrl: './contactanos-cli.page.html',
  styleUrls: ['./contactanos-cli.page.scss'],
})
export class ContactanosCliPage implements OnInit {
  nombre: string ="";
  asunto: string= "";
  cuerpo: string="";
  msj: string="";
  flag: boolean = true;
  constructor(private menuCtrl: MenuController, private router: Router, private alerta: AlertController) { }

  abrirSuperior(){
    this.menuCtrl.enable(true, 'superior');
    this.menuCtrl.open('superior');
  }

  abrirCategorias(){
    this.menuCtrl.enable(true, 'categorias');
    this.menuCtrl.open('categorias');
  }

  irHomeCli(){
    this.router.navigate(['home-cli'])    
  }

  limpiar(){
    this.nombre = "";
    this.asunto = "";
    this.cuerpo = "";
  }

  //Validaciones

  envioValido(){
    this.nombreValido()
    this.asuntoValido();
    this.cuerpoValido();
    if(this.flag === true){
      this.msj="Mensaje enviado con exito!";
      this.presentAlert(this.msj);
    }
  }

  nombreValido(){
    if(this.nombre.length <= 1){
      this.flag = false;
      this.msj="El nombre debe tener al menos dos carácteres";
      this.presentAlert(this.msj);
    }

    if(this.contieneCaracterEspecial(this.nombre) === true){
      this.flag = false;
      this.msj="Un nombre no contiene carácteres especiales";
      this.presentAlert(this.msj);
    }

    if(this.contieneNumero(this.nombre) === true){
      this.flag = false;
      this.msj="Un nombre no contiene números";
      this.presentAlert(this.msj);
    }
  }

  asuntoValido(){
    if(this.asunto.length <= 9){
      this.flag = false;
      this.msj="El asunto debe tener al menos 10 caracteres";
      this.presentAlert(this.msj);
    }
  }

  cuerpoValido(){
    if(this.cuerpo.length <= 49){
      this.flag = false;
      this.msj="El asunto debe tener al menos 50 caracteres";
      this.presentAlert(this.msj);
    }
  }

   //Funciones de validación
  contieneCaracterEspecial(texto: string): boolean {
    return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(texto);
  }
  
  // Función para verificar si una cadena contiene al menos un número
  contieneNumero(texto: string): boolean {
    return /\d/.test(texto);
  }
  primerCaracterEsMayus(texto: string): boolean {
    const primerCaracter = texto.charAt(0);
    return /[A-Z]/.test(primerCaracter);
  }

  async presentAlert(mensaje: string) {
    const alert = await this.alerta.create({
      header: 'Atención',
      subHeader: 'Todo bien',
      message: mensaje,
      buttons: ['Vale'],
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
