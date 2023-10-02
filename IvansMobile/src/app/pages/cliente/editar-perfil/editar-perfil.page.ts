import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController, IonInput } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { CamaraService } from 'src/app/services/camara.service';
import { CorreoService } from 'src/app/services/correo.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {
  
  msjRut: string = "";
  msjNombre: string = "";
  msjApellido: string = "";
  msjFono: string = "";
  msjDirec: string = "";
  msjCorreo: string = "";
  msjPreg: string = "";
  msjResp: string = "";
  
  msj: string="";
  rut: string = "";
  dvrut: string= "";
  nombre: string = "";
  apellido: string ="";
  fono: string= "";
  direc: string="";
  correo: string="";
  clave: string="";
  claveRep: string="";
  pregunta: string="";
  respuesta: string="";
  foto: string | undefined;
  flag: boolean = true;
  correoUser: string = "";
  
  usuario: any = [{idusuario: '', rut: '', dvrut: '', nombre: '', apellido: '', telefono: '', correo: '', clave: '', direccion: '', fotousuario: '', respuesta: '', rolu: '', preguntau: '' }];
  usuarios: any = [{idusuario: '',rut: '', dvrut: '', nombre: '', apellido: '', telefono: '', correo: '', clave: '', direccion: '', fotoUsuario: '', respuesta: '', rolU: '', preguntaU: ''}];
  pregId: number = 0;

  constructor(private router: Router,private menuCtrl: MenuController, private alerta: AlertController, private bd: DbserviceService, private activedRouter: ActivatedRoute, private camara: CamaraService, private sesion: CorreoService) { }

  irHomeCli(){
    this.router.navigate(['home-cli'])    
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

  envioValido(){
    this.flag = true;
    this.rutValido();
    this.nombreValido();
    this.apellidoValido();
    this.correoValido();
    this.respuestValida();
    this.direcValida();
    this.preguntaValida();
    this.fonoValido();
    if(this.flag === true){
      this.pregId = parseInt(this.pregunta);
      this.editarPerfil();   
    }
  }

  //Rut


  rutValido(){
    this.msjRut = "";

    if(this.rut.length === 0 || this.dvrut.length === 0){
      this.flag = false;
      this.msjRut+="Debe llenar estos campos";
    } else{

    
      if(this.SoloNumeros(this.rut) === false ){
        this.flag = false;
        this.msjRut+="El rut se compone solo de números "+"\n";
      }
      if(this.SoloNumerosOk(this.dvrut) === false){
        this.flag = false;
        this.msjRut+="El digito verificador solo se compone de números o k"+"\n";
      }
      if(this.validarRut(this.rut, this.dvrut) === false){
        this.flag = false;
        this.msjRut+="Rut invalido"+"\n";
      }
      for(var x of this.usuarios){
        if(x.rut === this.rut){
          this.msjRut+="Ese rut ya está en uso"+"\n";
          this.flag = false;
        }
      }

    }
  
  }

  //Nombre
  nombreValido(){
    this.msjNombre = "";

    if(this.nombre.length === 0){
      this.flag = false;
      this.msjNombre="Debe llenar este campo";
    } else{

      if(this.primerCaracterEsMayus(this.nombre) === false){
        this.flag = false;
        this.msjNombre+="La primera letra de su nombre debe ser mayúscula"+"\n";

      }
      if(this.contieneNumero(this.nombre) === true){ 
        this.flag = false;
        this.msjNombre+="Un nombre no debe contener números"+"\n";
        
      }
      if(this.contieneCaracterEspecial(this.nombre)){
        this.flag = false;
        this.msjNombre+="Un nombre no debe contener carácteres especiales"+"\n";
        
      }
    }
  }

  //Apellido
  apellidoValido(){

    this.msjApellido;

    if(this.apellido.length === 0){
      this.flag = false;
      this.msjApellido="Debe llenar este campo";
    } else{

      if(this.primerCaracterEsMayus(this.apellido) === false){
        this.flag = false;
        this.msjApellido+="La primera letra de su apellido debe ser mayúscula"+"\n";
        
      } else if(this.contieneNumero(this.apellido) === true){ 
        this.flag = false;
        this.msjApellido+="Un apellido no debe contener números"+"\n";
        
      } else if(this.tieneCaracteresApellido(this.apellido) == true){
        this.flag = false;
        this.msjApellido+="Un apellido no debe contener carácteres especiales"+"\n";
        
      }
    }
  }

  //Teléfono
  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;
  onInput(ev: any) {
    const value = ev.target!.value;

    // Remover los valores no númericos
    const filteredValue = value.replace(/[^0-9]+/g, '');

    this.ionInputEl.value = this.fono = filteredValue;
  }

  fonoValido(){
    this.msjFono = "";

    if(this.fono.length === 0){
      this.flag = false;
      this.msjFono="Debe llenar este campo";
    } else{

      if(this.fono.length < 8){
        this.flag = false;
        this.msjFono+="El teléfono debe ser de 8 números"+"\n";
      }

    }
  }

  //Correo

  correoValido(){
    this.msjCorreo = "";

    if(this.correo.length === 0){
      this.flag = false;
      this.msjCorreo="Debe llenar este campo";
    } else{
      if(this.esCorreoValido(this.correo) === false){
        this.flag = false;
        this.msjCorreo+="Su correo no es valido"+"\n";
        
      }
      for(var x of this.usuarios){
        if(x.correo === this.correo){
          this.msjCorreo+="Ese correo ya está en uso"+"\n";
          this.flag = false;
        }
      }
    }
  }

  //Dirección

  direcValida(){
    this.msjDirec="";

    if(this.direc.length === 0){
      this.flag = false;
      this.msjDirec="Debe llenar este campo";
    } else{
      if(this.primerCaracterEsMayus(this.direc) === false){
        this.flag = false;
        this.msjDirec+="Su dirección debe comenzar con una mayúscula"+"\n";
        
      }
      if(this.contieneNumero(this.direc) === false){
        this.flag = false;
        this.msjDirec+="Su dirección debe contener un número"+"\n";
        
      }
    }
  }

  async capturarImagen(){
    this.foto = await this.camara.takePicture();
  }


  //Respuesta

  preguntaValida(){
    this.msjPreg = "";
    if(this.pregunta.length === 0){
      this.flag = false;
      this.msjPreg="No ha seleccionado ninguna pregunta";
      ;
    }
  }

  respuestValida(){
    this.msjResp = "";
    if(this.respuesta.length === 0){
      this.flag = false;
      this.msjResp="No puede dejar la respuesta vacía";
      ;
    }
  }

  editarPerfil(){

    this.bd.modificarUsuario(this.usuario.idusuario, this.nombre, this.apellido, this.rut, this.dvrut, this.fono, this.correo, this.direc, this.foto, this.respuesta, this.pregId);
    this.bd.presentAlert("Usuario editado con exito");
    this.router.navigate(['']);
    
  }

 borrarCuenta(){
    this.bd.eliminarUsuario(this.usuario.idusuario);
    this.bd.presentAlert("Cuenta borrada");
  }




  esCorreoValido(correo: string): boolean {
    // Expresión regular para validar la dirección de correo electrónico
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    return regex.test(correo);
  }

  primerCaracterEsMayus(texto: string): boolean {
    const primerCaracter = texto.charAt(0);
    return /[A-Z]/.test(primerCaracter);
  }

  tieneCaracteresApellido(apellido: string): boolean {
    // Expresión regular para verificar si contiene caracteres especiales no permitidos en un apellido
    const regex = /[!@#$%^&*()_+{}\[\]:;<>,.?~/-]/;
    
    return regex.test(apellido);
  }

  SoloNumeros(cadena: string): boolean {
    return /^[0-9]+$/.test(cadena);
  }

  SoloNumerosOk(cadena: string): boolean {
    return /^[0-9Kk]+$/.test(cadena);
  }

  validarRut(cuerpoRut: string, digitoVerificador: string): boolean {
    const rutLimpio = cuerpoRut.replace(/\D/g, ''); // Elimina caracteres no numéricos
  
    if (rutLimpio.length !== 8) {
      return false; // El cuerpo del RUT debe tener 8 dígitos
    }
  
    const digitoCalculado = this.calcularDigitoVerificador(rutLimpio);
    return digitoCalculado === digitoVerificador.toUpperCase();
  }
  
  calcularDigitoVerificador(cuerpoRut: string): string {
    const secuencia = [2, 3, 4, 5, 6, 7, 2, 3];
    let suma = 0;
  
    for (let i = cuerpoRut.length - 1, j = 0; i >= 0; i--, j++) {
      suma += parseInt(cuerpoRut[i]) * secuencia[j];
      if (j === 7) {
        j = 0;
      }
    }
  
    const resto = suma % 11;
    const digito = 11 - resto;
  
    if (digito === 10) {
      return 'K';
    } else if (digito === 11) {
      return '0';
    } else {
      return digito.toString();
    }
  }

  // Función para verificar si una cadena contiene al menos un número
  contieneNumero(texto: string): boolean {
    return /\d/.test(texto);
  }

  // Función para verificar si una cadena contiene al menos un carácter especial
  contieneCaracterEspecial(texto: string): boolean {
    return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(texto);
  }

  buscarUsuarios(){
    this.bd.dbState().subscribe(res => {
      if(res){
        this.bd.fetchUsuario().subscribe(item => {
          this.usuarios = item;
        })
      }
    })
  }


  ngOnInit() {
    this.buscarUsuarios();

    this.sesion.fetchCorreoSesion().subscribe((correo) => {
      this.correoUser = correo;
      console.log("Correo recibido: "+correo);
      console.log("Correo almacenado: "+this.correoUser);
    });

    this.bd.dbState().subscribe(res => {
      if(res){
        this.bd.buscarPorCorreo(this.correo);
        
        this.bd.fetchUsuario().subscribe(items => {
          this.usuario = items[0];
          this.nombre = this.usuario.nombre;
          this.apellido = this.usuario.apellido;
          this.rut = this.usuario.rut;
          this.dvrut = this.usuario.dvrut;
          this.correo = this.usuario.correo;
          this.respuesta = this.usuario.respuesta;
          this.foto = this.usuario.fotousuario;
          this.fono = this.usuario.telefono;
          this.pregId = this.usuario.pregId;
          console.log("ID del usuario: "+this.usuario.idusuario );
        })
      }
    })
  }

}
