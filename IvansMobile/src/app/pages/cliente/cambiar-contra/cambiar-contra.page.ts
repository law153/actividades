import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { CorreoService } from 'src/app/services/correo.service';
import { DbserviceService } from 'src/app/services/dbservice.service';



@Component({
  selector: 'app-cambiar-contra',
  templateUrl: './cambiar-contra.page.html',
  styleUrls: ['./cambiar-contra.page.scss'],
})
export class CambiarContraPage implements OnInit {
  claveOld: string = "";
  claveNueva: string = "";
  claveRep: string = "";
  flag: boolean = true;
  msj: string = "";

  msjClave: string = "";
  msjRepClave: string = "";
  msjClaveOld: string = "";

  correoUser : string = "";
  usuario : any = [{idusuario: '', rut: '', dvrut: '', nombre: '', apellido: '', telefono: '', correo: '', clave: '', direccion: '', fotousuario: '', respuesta: '', rolu: '', preguntau: '' }];

  constructor(private router: Router,private menuCtrl: MenuController, private alerta: AlertController, private bd: DbserviceService, private sesion: CorreoService) { }

  irHomeCli(){
    this.router.navigate(['']);
  }

  irHome(){
    this.router.navigate(['']);
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

  editarClave(){

    this.bd.modificarClave(this.usuario.idusuario, this.claveNueva);
    this.bd.presentAlert('La contraseña se ha modificado con éxito');
    console.log("ID del usuario: "+this.usuario.idusuario );
    
    
  }
  
  //Validaciones
  envioValido(){
    this.flag = true;
    this.claveOldValida();
    this.claveNuevaValida();
    this.claveRepValid();
    if(this.flag === true){

      this.editarClave();
      this.irHomeCli();
      
    }
  }

  claveNuevaValida() {
    this.msjClave="";
    if(this.claveNueva.length === 0){
      this.flag = false;
      this.msjClave="Debe llenar este campo";
    } else{

      if (!this.contieneMayuscula(this.claveNueva)) {
        this.flag = false;
        this.msjClave += "La contraseña debe poseer una mayúscula"+"\n";
      }
      if (!this.contieneMinuscula(this.claveNueva)) {
        this.flag = false;
        this.msjClave += "La contraseña debe poseer una minúscula"+"\n";
        
      }
      if (!this.contieneNumero(this.claveNueva)) {
        this.flag = false;
        this.msjClave += "La contraseña debe poseer un número"+"\n";
        
      }
      if (!this.contieneCaracterEspecial(this.claveNueva)) {
        this.flag = false;
        this.msjClave += "La contraseña debe poseer un carácter especial"+"\n";
        
      }
      if (this.claveNueva.length <= 8) {
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
      if(this.claveRep != this.claveNueva){
        this.flag = false;
        this.msjRepClave+="La contraseña no se ha repetido correctamente"+"\n";
        
      }
    }
  }

  claveOldValida(){
    this.msjClaveOld = "";

    if(this.usuario.clave !== this.claveOld){
      this.flag = false;
      this.msjClaveOld="La contraseña actual ingresada no es correcta";
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

    this.sesion.fetchCorreoSesion().subscribe((correo) => {
      this.correoUser = correo;
      console.log("Correo recibido: "+correo);
      console.log("Correo almacenado:"+this.correoUser);
    })
    
    this.bd.dbState().subscribe(res => {
      if(res){
        this.bd.buscarPorCorreo(this.correoUser).subscribe(items => {
          this.usuario = items[0];
          
        });
      }
    })

  }

}
