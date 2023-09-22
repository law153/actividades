import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, IonInput, MenuController, ToastController } from '@ionic/angular'; 
import { DbserviceService } from 'src/app/services/dbservice.service';

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

  nombreRol: string = "";
  idRol: string = "";

  //Constructor

  constructor(private router: Router, private alerta: AlertController, private menuCtrl: MenuController, private activatedRouter: ActivatedRoute,  private db: DbserviceService ) {
    //Borrar luego
    this.activatedRouter.queryParams.subscribe(param => {
      if(this.router.getCurrentNavigation()?.extras.state){
        this.idRol = this.router.getCurrentNavigation()?.extras?.state?.["idEnviado"];
        this.nombreRol = this.router.getCurrentNavigation()?.extras?.state?.["nombreEnviado"];

    }})
  }
  
  //Metodos

  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;

  onInput(ev: any) {
    const value = ev.target!.value;

    // Remover los valores no númericos
    const filteredValue = value.replace(/[^0-9]+/g, '');

    this.ionInputEl.value = this.clave = filteredValue;
  }


  irHome(){
    this.router.navigate([''])    
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

  //Borrar luego
  




}