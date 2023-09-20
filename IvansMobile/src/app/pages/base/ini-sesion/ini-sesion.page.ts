import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
//import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-ini-sesion',
  templateUrl: './ini-sesion.page.html',
  styleUrls: ['./ini-sesion.page.scss'],
})
export class IniSesionPage implements OnInit {

  correo: string = "";
  clave: string = "";
  idUsuario: number = 200;
  constructor(private menuCtrl: MenuController, private router: Router, private alerta: AlertController, /*private bd: DbserviceService*/) { }

  irHome(){
    this.router.navigate(['']);
  }


  iniciarSesion(){

    
    localStorage.setItem('idUser',this.idUsuario+'');
    if(this.correo === "javicci@gmail.com" && this.clave === "umigod"){
      localStorage.setItem('token', "1");
      
      this.irCli();
    } else if(this.correo === "ivan.fuentes@gmail.com" && this.clave === "ivans"){
      localStorage.setItem('token', "2");
      this.irAdm();
      
    } else{
      this.presentAlert();
    }
    
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

  irOlvContra(){
    this.router.navigate(['/olv-contra']);
  }
  

  async presentAlert() {
    const alert = await this.alerta.create({
      header: 'Atención',
      subHeader: '-----------',
      message: 'Usuario no valido!',
      buttons: ['Vale'],
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
