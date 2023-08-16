import { Component, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, IonInput, ToastController } from '@ionic/angular';

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
  user1: string = '';
  clave: string = '';
  persona: any = [
    {
      nombre: "Alexander",
      edad: 20,
      fecha: "08/03/2003"
    }
  ];

  //Constructor

  constructor(private router: Router, private alerta: AlertController, private tostada: ToastController ) {}
  
  //Metodos

  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;

  onInput(ev: any) {
    const value = ev.target!.value;

    // Remover los valores no númericos
    const filteredValue = value.replace(/[^0-9]+/g, '');

    this.ionInputEl.value = this.clave = filteredValue;
  }

  irPagina1(){

    let NavigationsExtra: NavigationExtras = {
      state: {
      nombreEnviar: this.user1,
      edadEnviar: this.edad}
    }

    this.router.navigate(['/pagina1'], NavigationsExtra)

    
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

  async presentToast(position: 'top' | 'middle' | 'bottom', mensaje: string) {
    const toast = await this.tostada.create({
      message: mensaje,
      duration: 2000,
      position: position,
    });

    await toast.present();
  }


}