import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { CorreoService } from 'src/app/services/correo.service';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-olv-contra',
  templateUrl: './olv-contra.page.html',
  styleUrls: ['./olv-contra.page.scss'],
})
export class OlvContraPage implements OnInit {
  msjRut: string = "";
  msjPreg: string = "";
  msjResp: string = "";


  rut: string = "";
  dvrut: string = "";
  pregunta: string = "";
  respuesta: string="";
  flag: boolean= true;
  msj: string = "";

  usuario : any = {idusuario: '', rut: '', dvrut: '', nombre: '', apellido: '', telefono: '', correo: '', clave: '', direccion: '', fotousuario: '', respuesta: '', rolu: '', preguntau: '' };


  constructor(private menuCtrl: MenuController, private router: Router, private alerta: AlertController, private bd: DbserviceService, private sesion: CorreoService) { }

  irHome(){
    this.router.navigate(['']);
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

  irRestablecerContra(){
    this.router.navigate(['/restablecer-contra']);
  }

  //Validaciones


  validarDatos(){
    this.bd.dbState().subscribe(res => {
      if(res){
        this.bd.buscarPorRut(this.rut).subscribe(items => {
          //Verifica el rut
          if (items.length === 1) {
            this.usuario = items[0];

            //Verifica la pregunta
            if(parseInt(this.pregunta) === this.usuario.preguntau){
              //Verifica la respuesta
              if(this.respuesta === this.usuario.respuesta){

                localStorage.setItem('correo',this.usuario.correo);
                this.irRestablecerContra();
                //La respuesta no fue correcta
              } else{
                this.bd.presentAlert("La respuesta seleccionada no corresponde al usuario");

              }
              
              //La pregunta no fue correcta
            } else{
              this.bd.presentAlert("La pregunta seleccionada no corresponde al usuario");

            }

          } else {
            //El rut no fue correcto
            this.flag = false;

            this.bd.presentAlert("El rut no esta en el sistema");
          }
        });
      }
    })
  }


  ngOnInit() {
    
  }

}
