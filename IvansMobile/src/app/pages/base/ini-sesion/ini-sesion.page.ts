import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { PermisosService } from 'src/app/services/permisos.service';
import { CorreoService } from 'src/app/services/correo.service';

@Component({
  selector: 'app-ini-sesion',
  templateUrl: './ini-sesion.page.html',
  styleUrls: ['./ini-sesion.page.scss'],
})
export class IniSesionPage implements OnInit {

  correo: string = "";
  clave: string = "";
  idUsuario: number = 200;
  flag: boolean = true;

  //Variable para db
  usuarios: any = [{idusuario: '',rut: '', dvrut: '', nombre: '', apellido: '', telefono: '', correo: '', clave: '', direccion: '', fotoUsuario: '', respuesta: '', rolu: '', preguntaU: ''}];
  constructor(private menuCtrl: MenuController, private router: Router, private alerta: AlertController, private bd: DbserviceService, private permisos: PermisosService, private sesion: CorreoService ) { }

  irHome(){
    this.router.navigate(['']);
  }


  async iniciarSesion(){  
    this.flag = true;

    await this.existeCorreo();
    if(this.flag === true){

      this.sesion.setCorreoSesion(this.usuarios.correo);

      if(this.usuarios.rolu === 1){
        this.router.navigate(['/home-cli']);
        this.permisos.setUserRole(1);
      }
      if(this.usuarios.rolu === 2){
        this.router.navigate(['/home-adm']);
        this.permisos.setUserRole(2);
      }
    }


  }

  async existeCorreo(){
    
    if (this.flag === false) {
      // Evita ejecutar múltiples veces si flag es falso
      return;
    }

    this.bd.dbState().subscribe(res => {

      if (res) {
        this.bd.buscarIdUsuario(this.correo);
    
        this.bd.fetchUsuario().subscribe(items => {
          if (items.length > 0) {
            this.usuarios = items[0];

          } else {
            // No se encontraron un usuario
            this.bd.presentAlert('No se ha encontrado un usuario con ese correo');//Por algún motivo se dispara varias veces
            this.flag = false; 
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
