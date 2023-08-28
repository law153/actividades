import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, IonInput } from '@ionic/angular';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {
  msj: string="";
  rut: string = "";
  dvrut: string= "";
  nombre: string = "";
  apellido: string ="";
  fono: string= "";
  direc: string="";
  correo: string="";
  clave: string="";
  claveRep: string="";
  pregunta: string="";
  respuesta: string="";
  flag: boolean = true;

  constructor(private router: Router,private menuCtrl: MenuController, private alerta: AlertController) { }

  irHomeCli(){
    this.router.navigate(['home-cli'])    
  }
  //Funciones de menu

  //abrir menus
  abrirSuperior(){
    this.menuCtrl.enable(true, 'superiorCli');
    this.menuCtrl.open('superiorCli');
  }

  abrirCategorias(){
    this.menuCtrl.enable(true, 'categoriasCli');
    this.menuCtrl.open('categoriasCli');
  }

  envioValido(){
    this.rutValido();
    this.nombreValido();
    this.apellidoValido();
    this.correoValido();
    this.respuestValida();
    this.direcValida();
    this.preguntaValida();
    if(this.flag === true){
      this.msj="Usuario creado correctamente";
      this.router.navigate(['ini-sesion'])    
    }
  }

  //Rut


  rutValido(){
    if(this.SoloNumeros(this.rut) === false ){
      this.flag = false;
      this.msj="El rut se compone solo de números";
      this.presentAlert(this.msj);

    }else if(this.SoloNumerosOk(this.dvrut) === false){

      this.flag = false;
      this.msj="El digito verificador solo se compone de números o k";
      this.presentAlert(this.msj);

    } else if(this.validarRut(this.rut, this.dvrut) === false){
      this.flag = false;
      this.msj="Rut invalido";
      this.presentAlert(this.msj);

    }

  
  }

  //Nombre
  nombreValido(){
    if(this.primerCaracterEsMayus(this.nombre) === false){
      this.flag = false;
      this.msj="La primera letra de su nombre debe ser mayúscula";
      this.presentAlert(this.msj);
    } else if(this.contieneNumero(this.nombre) === true){ 
      this.flag = false;
      this.msj="Un nombre no debe contener números";
      this.presentAlert(this.msj);
    } else if(this.contieneCaracterEspecial(this.nombre)){
      this.flag = false;
      this.msj="Un nombre no debe contener carácteres especiales";
      this.presentAlert(this.msj);
    }
  }

  //Apellido
  apellidoValido(){
    if(this.primerCaracterEsMayus(this.apellido) === false){
      this.flag = false;
      this.msj="La primera letra de su apellido debe ser mayúscula";
      this.presentAlert(this.msj);
    } else if(this.contieneNumero(this.apellido) === true){ 
      this.flag = false;
      this.msj="Un apellido no debe contener números";
      this.presentAlert(this.msj);
    } else if(this.tieneCaracteresApellido(this.apellido) == true){
      this.flag = false;
      this.msj="Un apellido no debe contener carácteres especiales";
      this.presentAlert(this.msj);
    }
  }

  //Teléfono
  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;
  onInput(ev: any) {
    const value = ev.target!.value;

    // Remover los valores no númericos
    const filteredValue = value.replace(/[^0-9]+/g, '');

    this.ionInputEl.value = this.fono = filteredValue;
  }

  //Correo

  correoValido(){
    if(this.esCorreoValido(this.correo) === false){
      this.flag = false;
      this.msj="Su correo no es valido";
      this.presentAlert(this.msj);
    }
  }

  //Dirección

  direcValida(){
    if(this.primerCaracterEsMayus(this.direc) === false){
      this.flag = false;
      this.msj="Su dirección debe comenzar con una mayúscula";
      this.presentAlert(this.msj);
    } else if(this.contieneNumero(this.direc) === false){
      this.flag = false;
      this.msj="Su dirección debe contener un número";
      this.presentAlert(this.msj);
    }
  }


  //Respuesta

  preguntaValida(){
    if(this.pregunta.length === 0){
      this.flag = false;
      this.msj="No ha seleccionado ninguna pregunta";
      this.presentAlert(this.msj);
    }
  }

  respuestValida(){
    if(this.respuesta.length === 0){
      this.flag = false;
      this.msj="No puede dejar la respuesta vacía";
      this.presentAlert(this.msj);
    }
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


  esCorreoValido(correo: string): boolean {
    // Expresión regular para validar la dirección de correo electrónico
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    return regex.test(correo);
  }

  primerCaracterEsMayus(texto: string): boolean {
    const primerCaracter = texto.charAt(0);
    return /[A-Z]/.test(primerCaracter);
  }

  tieneCaracteresApellido(apellido: string): boolean {
    // Expresión regular para verificar si contiene caracteres especiales no permitidos en un apellido
    const regex = /[!@#$%^&*()_+{}\[\]:;<>,.?~/-]/;
    
    return regex.test(apellido);
  }

  SoloNumeros(cadena: string): boolean {
    return /^[0-9]+$/.test(cadena);
  }

  SoloNumerosOk(cadena: string): boolean {
    return /^[0-9Kk]+$/.test(cadena);
  }

  validarRut(cuerpoRut: string, digitoVerificador: string): boolean {
    const rutLimpio = cuerpoRut.replace(/\D/g, ''); // Elimina caracteres no numéricos
  
    if (rutLimpio.length !== 8) {
      return false; // El cuerpo del RUT debe tener 8 dígitos
    }
  
    const digitoCalculado = this.calcularDigitoVerificador(rutLimpio);
    return digitoCalculado === digitoVerificador.toUpperCase();
  }
  
  calcularDigitoVerificador(cuerpoRut: string): string {
    const secuencia = [2, 3, 4, 5, 6, 7, 2, 3];
    let suma = 0;
  
    for (let i = cuerpoRut.length - 1, j = 0; i >= 0; i--, j++) {
      suma += parseInt(cuerpoRut[i]) * secuencia[j];
      if (j === 7) {
        j = 0;
      }
    }
  
    const resto = suma % 11;
    const digito = 11 - resto;
  
    if (digito === 10) {
      return 'K';
    } else if (digito === 11) {
      return '0';
    } else {
      return digito.toString();
    }
  }

  // Función para verificar si una cadena contiene al menos un número
  contieneNumero(texto: string): boolean {
    return /\d/.test(texto);
  }

  // Función para verificar si una cadena contiene al menos un carácter especial
  contieneCaracterEspecial(texto: string): boolean {
    return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(texto);
  }


  ngOnInit() {
  }

}
