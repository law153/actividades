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


  rolStorage: any;

  correoStorage: any;

  //Variable para db
  
  usuario: any = {idusuario: '', rut: '', dvrut: '', nombre: '', apellido: '', telefono: '', correo: '', clave: '', direccion: '', fotousuario: '', respuesta: '', rolu: '', preguntau: '' };

  constructor(private menuCtrl: MenuController, private router: Router, private alerta: AlertController, private bd: DbserviceService, private permisos: PermisosService, private sesion: CorreoService ) { }

  irHome(){
    this.router.navigate(['']);
  }

  limpiar(){
    this.correo = "";
    this.clave = "";
  }


  iniciarSesion(){
    this.bd.dbState().subscribe(res => {
      if(res){
        this.bd.buscarPorCorreo(this.correo).subscribe(items => {
          
          if (items.length === 1) {
            // Se encontró al usuario
            this.usuario = items[0];
            console.log("Se encontró al usuario", this.usuario.nombre);
            console.log("ID usuario: "+this.usuario.idusuario);
            if(this.clave === this.usuario.clave){

              localStorage.setItem('correo',this.usuario.correo);
              localStorage.setItem('usuario',''+this.usuario.idusuario);
              this.sesion.setCorreoSesion(this.usuario.correo);
              
              if(this.usuario.rolu === 1){
                this.router.navigate(['/home-cli']);
                localStorage.setItem('rol','1');
                this.rolStorage = localStorage.getItem('rol');
                this.permisos.setUserRole(parseInt(this.rolStorage));
              }
              if(this.usuario.rolu === 2){
                this.router.navigate(['/home-adm']);
                localStorage.setItem('rol','2');
                this.rolStorage = localStorage.getItem('rol');
                this.permisos.setUserRole(parseInt(this.rolStorage));
              }
      
            } else{
              this.bd.presentAlert("Correo y/o contraseña no encontrados");
              console.log("La clave ingresado no es la correcta");
            }

          } else {
            // No se encontró al usuario
            this.flag = false;
            console.log("Se equivocó en el correo");
            this.bd.presentAlert("Correo y/o contraseña no encontrados");
          }
        });
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
      message: 'usuarios no valido!',
      buttons: ['Vale'],
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
