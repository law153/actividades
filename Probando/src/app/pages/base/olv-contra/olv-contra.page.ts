import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-olv-contra',
  templateUrl: './olv-contra.page.html',
  styleUrls: ['./olv-contra.page.scss'],
})
export class OlvContraPage implements OnInit {
  rut: string = "";
  dvrut: string = "";
  pregunta: string = "";
  respuesta: string="";
  flag: boolean= true;
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

  irRestablecerContra(){
    this.router.navigate(['/restablecer-contra']);
  }

  //Validaciones
  envioValido(){
    this.rutValido();
    this.preguntaValida();
    this.respuestaValida();
    if(this.flag === true){
      this.irRestablecerContra();
    }
  }

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

  preguntaValida(){
    if(this.pregunta.length === 0){
      this.flag = false;
      this.msj="No ha seleccionado ninguna pregunta";
      this.presentAlert(this.msj);
    }
  }

  respuestaValida(){
    if(this.respuesta.length === 0){
      this.flag = false;
      this.msj="No puede dejar la respuesta vacía";
      this.presentAlert(this.msj);
    }
  }



  //Funciones de validacion
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

  SoloNumeros(cadena: string): boolean {
    return /^[0-9]+$/.test(cadena);
  }

  SoloNumerosOk(cadena: string): boolean {
    return /^[0-9Kk]+$/.test(cadena);
  }

  ngOnInit() {
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

}
