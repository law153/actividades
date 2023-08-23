import { Component, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, AnimationController, GestureController ,ToastController, IonCard, IonInput} from '@ionic/angular';
import type { Animation, Gesture, GestureDetail } from '@ionic/angular';

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

  listado: any = ["Juan", "Mario", "Alex"]


  //Animación 
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;
  private gesture!: Gesture;
  private started = false;
  private initialStep = 0;

  /**
   * The track is 344px wide.
   * The card is 100px wide.
   * We want 16px of margin on each end of the track.
   */
  private readonly MAX_TRANSLATE = 344 - 100 - 32;

  //Constructor

  constructor(private router: Router, private alerta: AlertController, private tostada: ToastController, private animationCtrl: AnimationController, private gestureCtrl: GestureController) {}
  
  //Metodos

  private onMove(ev: GestureDetail) {
    if (!this.started) {
      this.animation.progressStart();
      this.started = true;
    }

    this.animation.progressStep(this.getStep(ev));
  }

  private onEnd(ev: GestureDetail) {
    if (!this.started) {
      return;
    }

    this.gesture.enable(false);

    const step = this.getStep(ev);
    const shouldComplete = step > 0.5;

    this.animation.progressEnd(shouldComplete ? 1 : 0, step).onFinish(() => {
      this.gesture.enable(true);
    });

    this.initialStep = shouldComplete ? this.MAX_TRANSLATE : 0;
    this.started = false;
  }

  private clamp(min: number, n: number, max: number) {
    return Math.max(min, Math.min(n, max));
  }

  private getStep(ev: GestureDetail) {
    const delta = this.initialStep + ev.deltaX;
    return this.clamp(0, delta / this.MAX_TRANSLATE, 1);
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateX(0)', `translateX(${this.MAX_TRANSLATE}px)`);

    const gesture = (this.gesture = this.gestureCtrl.create({
      el: this.card.nativeElement,
      threshold: 0,
      gestureName: 'card-drag',
      onMove: (ev) => this.onMove(ev),
      onEnd: (ev) => this.onEnd(ev),
    }));

    gesture.enable(true);
  }
  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;
  onInput(ev: any) {
    const value = ev.target!.value;

    // Remover los valores no númericos
    const filteredValue = value.replace(/[^0-9]+/g, '');

    this.ionInputEl.value = this.clave = filteredValue;
  }

  irPagina1(){

    if (this.user1.trim() === '' || this.clave.trim() === '') {

      this.presentAlert('Por favor, completa todos los campos.');

    } else if (this.user1.trim().length < 3 || this.clave.length < 4 ) {

      this.presentAlert('Usuario o contraseña no validos!');

    } else {
      // Los campos son válidos, navegar a la siguiente página
      let NavigationsExtra: NavigationExtras = {
        state: {
          nombreEnviar: this.user1
        }
      };
      this.router.navigate(['/pagina1'], NavigationsExtra);
    }

    
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