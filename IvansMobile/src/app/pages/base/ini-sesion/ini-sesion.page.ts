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
  flag: boolean = true;

  //Variable para db
  usuario: any = [{idusuario: '', rut: '', dvrut: '', nombre: '', apellido: '', telefono: '', correo: '', clave: '', direccion: '', fotousuario: '', respuesta: '', rolu: '', preguntau: '' }];
  usuarios: any = [{idusuario: '',rut: '', dvrut: '', nombre: '', apellido: '', telefono: '', correo: '', clave: '', direccion: '', fotousuario: '', respuesta: '', rolu: '', preguntau: ''}];
  constructor(private menuCtrl: MenuController, private router: Router, private alerta: AlertController, private bd: DbserviceService, private permisos: PermisosService, private sesion: CorreoService ) { }

  irHome(){
    this.router.navigate(['']);
  }


  async iniciarSesion(){  

    await this.existeCorreo();
    console.log("ID del usuario:"+this.usuario.idusuario);
    console.log("Rol del usuario:"+this.usuario.rolu);
    if(this.flag === true){

      this.sesion.setCorreoSesion(this.usuarios.correo);

      if(this.usuario.rolu === 1){
        this.router.navigate(['/home-cli']);
        this.permisos.setUserRole(1);
      }
      if(this.usuario.rolu === 2){
        this.router.navigate(['/home-adm']);
        this.permisos.setUserRole(2);
      }
    }


  }

  async existeCorreo(){
    this.flag = false;

    for(let usuario of this.usuarios){
      console.log("Correo usuario "+usuario.idusuario+": "+usuario.correo);
      if(usuario.correo === this.correo){
        console.log("El correo existe!");
        this.flag = true;
        this.usuario = usuario;
        console.log(this.usuario.nombre);
      }
    }

    if(this.flag === false){
      this.bd.presentAlert("El correo no se ha encontrado");
      console.log("El correo no existe!");
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
      message: 'usuarios no valido!',
      buttons: ['Vale'],
    });

    await alert.present();
  }

  ngOnInit() {

    this.bd.dbState().subscribe(res => {
      if(res){
        this.bd.fetchUsuario().subscribe(items => {
          this.usuarios = items;
        })
      }
    })
  }

}
