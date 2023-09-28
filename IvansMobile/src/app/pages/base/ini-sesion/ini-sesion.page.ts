import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { PermisosService } from 'src/app/services/permisos.service';

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
  usuarios: any = [{idusuario: '',rut: '', dvrut: '', nombre: '', apellido: '', telefono: '', correo: '', clave: '', direccion: '', fotoUsuario: '', respuesta: '', rolu: '', preguntaU: ''}];
  constructor(private menuCtrl: MenuController, private router: Router, private alerta: AlertController, private bd: DbserviceService, private permisos: PermisosService ) { }

  irHome(){
    this.router.navigate(['']);
  }


  iniciarSesion(){

    if(this.correo === 'cliente'){
      this.router.navigate(['/home-cli']);
      this.permisos.setUserRole(1);
    }
    if(this.correo === 'admin'){
      this.router.navigate(['/home-adm']);
      this.permisos.setUserRole(2);
    }
    //this.existeCorreo();
    
    /*if(this.clave === this.usuarios.clave){
      //La contraseña es correcta
      if(this.usuarios.rolu === 1){
        //El usuario es un cliente
        this.router.navigate(['/home-cli']);
        this.permisos.setUserRole(1);
      } 

      if(this.usuarios.rolu === 2){
        //El usuario es admin
        this.router.navigate(['/home-adm']);
        this.permisos.setUserRole(2);
      }

    } else {
      //La contraseña es incorrecta
      this.bd.presentAlert('La contraseña ingresada no es correcta');
    }*/

  }

  existeCorreo(){
    this.bd.dbState().subscribe(res => {
      if (res) {
        this.bd.buscarIdUsuario(this.correo);
    
        this.bd.fetchUsuario().subscribe(items => {
          if (items.length > 0) {
            //Se encontró el usuario activo
            this.usuarios = items[0];
          } else {
            // No se encontraron un usuario
            this.bd.presentAlert('No se ha encontrado un usuario con ese correo'); //Por algún motivo se dispara varias veces
          }
        })
      }
    })
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
