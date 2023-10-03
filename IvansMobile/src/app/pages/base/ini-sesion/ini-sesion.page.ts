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

  constructor(private menuCtrl: MenuController, private router: Router, private alerta: AlertController, private bd: DbserviceService, private permisos: PermisosService, private sesion: CorreoService ) { }

  irHome(){
    this.router.navigate(['']);
  }


  async iniciarSesion(){  


    
    await this.verificarCorreo();
    console.log("Correo del campo:"+this.correo);
    console.log("Correo del arreglo:"+this.usuario.correo);
    console.log("Rol del usuario: "+this.usuario.rolu)
    if(this.flag === true){
      
      await this.claveCorrecta();

      if(this.flag === true){

        this.sesion.setCorreoSesion(this.usuario.correo);
        
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


  }

  async claveCorrecta(){
    this.flag = false;

    if(this.clave === this.usuario.clave){
      this.flag = true;
    }

    if(this.flag === false){
      this.bd.presentAlert("El correo y/o contraseña no validos");
      console.log("Se equivocó en la clave");
    }

  }

  async verificarCorreo(){
    this.flag = false;
    this.bd.dbState().subscribe(res => {
      if(res){
        this.bd.buscarPorCorreo(this.correo).subscribe(items => {
          if (items.length > 0) {
            // Se encontró al usuario
            this.usuario = items[0];
            console.log("Se encontró al usuario", this.usuario.nombre);
            console.log("ID usuario: "+this.usuario.idusuario);
            this.flag = true;
          } else {
            // No se encontró al usuario
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
