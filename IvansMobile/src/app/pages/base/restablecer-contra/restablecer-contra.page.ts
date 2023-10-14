import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { CorreoService } from 'src/app/services/correo.service';
import { DbserviceService } from 'src/app/services/dbservice.service';


@Component({
  selector: 'app-restablecer-contra',
  templateUrl: './restablecer-contra.page.html',
  styleUrls: ['./restablecer-contra.page.scss'],
})
export class RestablecerContraPage implements OnInit {
  clave: string="";
  claveRep: string="";
  flag: boolean=true;
  msj: string = "";

  msjClave: string = "";
  msjRepClave: string = "";

  correoUser : any = "";
  usuario : any = [{idusuario: '', rut: '', dvrut: '', nombre: '', apellido: '', telefono: '', correo: '', clave: '', direccion: '', fotousuario: '', respuesta: '', rolu: '', preguntau: '' }];

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

  irIniSesion(){
    this.router.navigate(['/ini-sesion']);
  }

  async editarClave(){
    await this.bd.modificarClave(this.usuario.idusuario, this.clave);
    await this.bd.presentAlert('La contraseña se ha modificado con éxito');
  }

  //Validaciones
  async envioValido(){
    this.flag = true;
    this.claveValida();
    this.claveRepValid();
    if(this.flag === true){
      await this.editarClave();
      this.sesion.setCorreoSesion('');
      this.irIniSesion();
    }
  }

  claveValida() {
    this.msjClave="";
    if(this.clave.length === 0){
      this.flag = false;
      this.msjClave="Debe llenar este campo";
    } else{

      if (!this.contieneMayuscula(this.clave)) {
        this.flag = false;
        this.msjClave += "La contraseña debe poseer una mayúscula"+"\n";
      }
      if (!this.contieneMinuscula(this.clave)) {
        this.flag = false;
        this.msjClave += "La contraseña debe poseer una minúscula"+"\n";
        
      }
      if (!this.contieneNumero(this.clave)) {
        this.flag = false;
        this.msjClave += "La contraseña debe poseer un número"+"\n";
        
      }
      if (!this.contieneCaracterEspecial(this.clave)) {
        this.flag = false;
        this.msjClave += "La contraseña debe poseer un carácter especial"+"\n";
        
      }
      if (this.clave.length <= 8) {
        this.flag = false;
        this.msjClave += "La contraseña debe tener al menos 8 caracteres de \nlongitud"+"\n";
      
      }

    }
  }

  claveRepValid(){
    this.msjRepClave = "";
    if(this.claveRep.length === 0){
      this.flag = false;
      this.msjRepClave="Debe llenar este campo";
    } else{
      if(this.claveRep != this.clave){
        this.flag = false;
        this.msjRepClave+="La contraseña no se ha repetido correctamente"+"\n";
        
      }
    }
  }

  //Funciones de validación
  

  contieneMayuscula(texto: string): boolean {
    return /[A-Z]/.test(texto);
  }
  
  // Función para verificar si una cadena contiene al menos una minúscula
   contieneMinuscula(texto: string): boolean {
    return /[a-z]/.test(texto);
  }
  
  // Función para verificar si una cadena contiene al menos un carácter especial
  contieneCaracterEspecial(texto: string): boolean {
    return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(texto);
  }
  
  // Función para verificar si una cadena contiene al menos un número
  contieneNumero(texto: string): boolean {
    return /\d/.test(texto);
  }

  async presentAlert(mensaje: string) {
    const alert = await this.alerta.create({
      header: 'Alerta',
      subHeader: 'Mensaje importante',
      message: mensaje,
      buttons: ['Vale'],
    });

    await alert.present();
  }

  ngOnInit() {

    this.correoUser = localStorage.getItem('correo');

    this.bd.dbState().subscribe(res => {
      if(res){
        this.bd.buscarPorCorreo(this.correoUser);
        
        this.bd.fetchUsuario().subscribe(items => {
          if(items.length > 0)
            this.usuario = items[0];
            
            console.log("ID del usuario: "+this.usuario.idusuario );
        })
      }
    })


  }

}
