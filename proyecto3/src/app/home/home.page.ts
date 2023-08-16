import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Variables
  msj: string = 'Si ves esto, la alerta o mensaje no cambiaron correctamente';
  nombreUsuario: string = 'Juan';
  edad: number = 18;
  user1: string = 'hola';
  persona: any = [
    {
      nombre: "Alexander",
      edad: 20,
      fecha: "08/03/2003"
    }
  ];

  //Constructor

  constructor(private router: Router, private alerta: AlertController, private tostada: ToastController, private contexto: NavigationExtras ) {}
  
  //Metodos
  sumar(){
    console.log("wena");
    this.nombreUsuario;
  }

  irPagina1(){
    let NavigationsExtra: NavigationExtras = {
      state: {
      nombreEnviar: this.user1,
      edadEnviar: this.edad}
    }
    this.router.navigate(['/pagina1'], NavigationsExtra)

    if(this.user1 == 'Juan'){
      this.msj = 'Bienvenido '+this.user1;
    } else if(this.user1 == 'Roberto'){
      this.msj = 'Aqui no nos gusta su nombre '+this.user1;
    } else{
      this.msj = 'Vayase de esta aplicación, negro marginal';
    }

    this.presentAlert(this.msj);

    
  }

  //Alerta --- Investigar como usar este mismo codigo para mostrar distintas alertas (no copy paste cambiando cosas)
  async presentAlert(mensaje: string) {
    const alert = await this.alerta.create({
      header: 'Alerta',
      subHeader: 'Mensaje importante',
      message: mensaje,
      buttons: ['Vale'],
    });

    await alert.present();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.tostada.create({
      message: 'Wena',
      duration: 2000,
      position: position,
    });

    await toast.present();
  }


}