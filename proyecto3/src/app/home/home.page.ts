import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Variables
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

  constructor(private router: Router, private alerta: AlertController, private tostada: ToastController) {}
  
  //Metodos
  sumar(){
    console.log("wena");
    this.nombreUsuario;
  }

  irPagina1(){

    this.router.navigate(['/pagina1'])
    this.presentAlert(this.nombreUsuario);

    
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