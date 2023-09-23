import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-ini-sesion',
  templateUrl: './ini-sesion.page.html',
  styleUrls: ['./ini-sesion.page.scss'],
})
export class IniSesionPage implements OnInit {

  correo: string = "";
  clave: string = "";
  idUsuario: number = 200;

  //Variable para db
  usuarios: any = [{rut: '', dvrut: '', nombre: '', apellido: '', telefono: '', correo: '', clave: '', direccion: '', fotoUsuario: '', respuesta: '', rolU: '', preguntaU: ''}];
  constructor(private menuCtrl: MenuController, private router: Router, private alerta: AlertController, private bd: DbserviceService) { }

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

  iniciarSesion2(){
    this.bd.dbState().subscribe(res => {
      if(res){
        this.bd.buscarIdUsuario(this.correo);
        
        this.bd.fetchUsuario().subscribe(items => {
          this.usuarios = items;
        })
      }

    })

    if(this.usuarios.correo !== '' ){
      if(this.clave === this.usuarios.clave) {
        if(this.usuarios.rolu === 1 ) {
          this.router.navigate(['/home-cli'])
          localStorage.setItem('token', "1");
        }else{
          this.router.navigate(['/home-adm'])
          localStorage.setItem('token', "2");

        }
      }else{
        this.bd.presentAlert('clae inválido');
      }
    }else{
      this.bd.presentAlert('correo banco etao inválido');
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
