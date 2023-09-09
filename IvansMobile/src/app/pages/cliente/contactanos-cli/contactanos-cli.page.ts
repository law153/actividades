import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-contactanos-cli',
  templateUrl: './contactanos-cli.page.html',
  styleUrls: ['./contactanos-cli.page.scss'],
})
export class ContactanosCliPage implements OnInit {

  msjNombre: string = "";
  msjAsunto: string = "";
  msjCuerpo: string = "";


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
    this.msjNombre = "";
    if(this.nombre.length <= 1){
      this.flag = false;
      this.msjNombre+="El nombre debe tener al menos dos carácteres"+"\n";

    }
    if(this.contieneCaracterEspecial(this.nombre) === true){
      this.flag = false;
      this.msjNombre+="Un nombre no contiene carácteres especiales"+"\n";

    }
    if(this.contieneNumero(this.nombre) === true){
      this.flag = false;
      this.msjNombre+="Un nombre no contiene números"+"\n";

    }
  }

  asuntoValido(){
    this.msjAsunto = "";
    if(this.asunto.length <= 9){
      this.flag = false;
      this.msjAsunto="El asunto debe tener al menos 10 caracteres";

    }
  }

  cuerpoValido(){
    this.msjCuerpo = "";
    if(this.cuerpo.length <= 49){
      this.flag = false;
      this.msjCuerpo="El cuerpo debe tener al menos 50 caracteres";

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