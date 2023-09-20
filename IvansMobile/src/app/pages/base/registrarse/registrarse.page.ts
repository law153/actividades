import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, IonInput} from '@ionic/angular';
//import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  //Variables para mensaje

  msj: string="";
  msjRut: string = "";
  msjNombre: string = "";
  msjApellido: string = "";
  msjFono: string = "";
  msjDirec: string = "";
  msjCorreo: string = "";
  msjClave: string = "";
  msjRepClave: string = "";
  msjPreg: string = "";
  msjResp: string = "";

  //Variables para inputs
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
  flag: boolean = true;

  //Variable para db
  usuarios: any = [{rut: '', dvrut: '', nombre: '', apellido: '', telefono: '', correo: '', clave: '', direccion: '', fotoUsuario: '', respuesta: '', rolU: '', preguntaU: ''}];

  constructor(private menuCtrl: MenuController, private router: Router, /*private bd: DbserviceService*/) { }

  irHome(){
    this.router.navigate([''])
  }

  abrirSuperior(){
    this.menuCtrl.enable(true, 'superior');
    this.menuCtrl.open('superior');
  }

  abrirCategorias(){
    this.menuCtrl.enable(true, 'categorias');
    this.menuCtrl.open('categorias');
  }

  limpiar(){
    this.rut= "";
    this.dvrut = "";
    this.nombre = "";
    this.apellido ="";
    this.fono = "";
    this.direc ="";
    this.correo ="";
    this.clave ="";
    this.claveRep ="";
    this.pregunta ="";
    this.respuesta ="";

  }

  //Validaciones


  envioValido(){
    this.rutValido();
    this.nombreValido();
    this.apellidoValido();
    this.correoValido();
    this.claveValida();
    this.claveRepValid();
    this.respuestValida();
    this.direcValida();
    this.preguntaValida();
    this.fonoValido();
    if(this.flag === true){
      //this.agregar();
      this.msj="Usuario creado correctamente";
      this.router.navigate(['ini-sesion'])    
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
        ;
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

  //Contraseña
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




  //Funciones de validación

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


  ngOnInit() {
    /*
    this.bd.dbState().subscribe(res => {
      if(res){
        this.bd.fetchUsuario().subscribe(item => {
          this.usuarios = item;
        })
      }
    })
    */
  }

  /*agregar(){
    let preguntaid: number = 0;
    if(this.pregunta === 'pregunta1'){
      preguntaid = 1;
    } else if(this.pregunta === 'pregunta2'){
      preguntaid= 2;
    } else if(this.pregunta === 'pregunta3'){
      preguntaid= 3;
    }
    this.bd.agregarUsuario(this.nombre, this.apellido, this.rut, this.dvrut, this.fono, this.correo, this.direc, this.clave, '/assets/imagen.jpg', this.respuesta, 1, preguntaid);
    this.router.navigate(['/ini-sesion'])
  }*/

}