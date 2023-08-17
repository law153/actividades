import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {
  //Variable pasada de la otra pagina
  nombre: string = "";

  //Variables de la pagina
  nombreC: string = "";
  apellido: string = "";
  nivelEdu: string = "";
  fechaNac: string = "";

  //Variables de alerta
  cabezera: string ="Tus datos";
  subcabe: string = "Su nombre es: ";
  msj: string = "";


  constructor(private router: Router, private activeRouter: ActivatedRoute,  private alerta: AlertController) { 
    this.activeRouter.queryParams.subscribe(param => {
      if(this.router.getCurrentNavigation()?.extras.state){
        this.nombre = this.router.getCurrentNavigation()?.extras?.state?.["nombreEnviar"];
      }
    })
  }

  Limpiar(){
    this.nombreC = "";
    this.apellido = "";
    this.nivelEdu = "";
    this.fechaNac = "";
  }

  Mostrar(){
    this.msj = this.nombreC + " " + this.apellido;
    this.presentAlert(this.cabezera, this.subcabe, this.msj);
  }

  async presentAlert(cab: string, subcab: string, mensaje: string) {
    const alert = await this.alerta.create({
      header: cab,
      subHeader: subcab,
      message: mensaje,
      buttons: ['Vale'],
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
