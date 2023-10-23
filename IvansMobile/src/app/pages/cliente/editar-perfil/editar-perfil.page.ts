import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController, IonInput } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { CamaraService } from 'src/app/services/camara.service';
import { CorreoService } from 'src/app/services/correo.service';
import { PermisosService } from 'src/app/services/permisos.service';
import { Pregunta } from 'src/app/services/pregunta';
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
  correoUser: any = "";
  
  correoStorage: any = "";
  rolStorage: any = "";

  usuario: any = {idusuario: '', rut: '', dvrut: '', nombre: '', apellido: '', telefono: '', correo: '', clave: '', direccion: '', fotousuario: '', respuesta: '', rolu: '', preguntau: '' };

  pregId: number = 0;

  preguntas: any = [{idpregunta: '', nombrepregunta: ''}];
  preguntaseleccionada: any;

  constructor(private router: Router,private menuCtrl: MenuController, private alerta: AlertController, private bd: DbserviceService, private activedRouter: ActivatedRoute, private camara: CamaraService, private sesion: CorreoService, private permisos: PermisosService) { }

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

  compareFn(preg1: Pregunta, preg2: Pregunta): boolean{
    return preg1 && preg2 ? preg1.idpregunta === preg2.idpregunta : preg1 === preg2;
  }

  async envioValido(){
    this.flag = true;

    await this.rutValido();
    console.log("Estado de flag: "+this.flag);
    this.nombreValido();
    console.log("Estado de flag: "+this.flag);
    this.apellidoValido();
    console.log("Estado de flag: "+this.flag);
    await this.correoValido();
    console.log("Estado de flag: "+this.flag);
    this.respuestValida();
    console.log("Estado de flag: "+this.flag);
    this.direcValida();
    console.log("Estado de flag: "+this.flag);
    this.preguntaValida();
    console.log("Estado de flag: "+this.flag);
    this.fonoValido();
    console.log("Estado de flag: "+this.flag);
    if(this.flag === true){

      this.pregId = parseInt(this.pregunta);
      this.editarPerfil();   
      this.sesion.setCorreoSesion(this.correo);
      localStorage.setItem('correo',this.correo);
    }
  }

  //Rut


  async rutValido(){
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

      try{
        const usuarios = await this.bd.buscarPorRutMenosTu(this.rut, this.usuario.idusuario)
        if(usuarios.length > 0){
          this.flag = false;
          this.msjRut = "RUT ya ocupado en el sistema" + "\n";
          console.log("Hay usuarios con este rut");
        }
      }catch(error){
        console.error("Error al buscar usuario por RUT:", error);
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

  async correoValido(){
    this.msjCorreo = "";

    if(this.correo.length === 0){
      
      this.msjCorreo="Debe llenar este campo";
    } else{
      

      if(this.esCorreoValido(this.correo) === false){
        this.flag = false;
        this.msjCorreo+="Su correo no es valido"+"\n";
        
      }

      try{
        const usuarios = await this.bd.buscarPorCorreoMenosTu(this.correo, this.usuario.idusuario)
        if(usuarios.length > 0){
          this.flag = false;
          this.msjCorreo = "Correo ya ocupado en el sistema" + "\n";
          console.log("Hay usuarios con este correo");
        }
      }catch(error){
        console.error("Error al buscar usuario por CORREO:", error);
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
    this.pregunta = this.preguntaseleccionada.nombrepregunta
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

    this.bd.modificarUsuario(this.usuario.idusuario, this.nombre, this.apellido, parseInt(this.rut), this.dvrut, this.fono, this.correo, this.direc, this.foto, this.respuesta, this.preguntaseleccionada.idpregunta);
    this.bd.presentAlert("Usuario editado con exito");
    this.router.navigate(['']);
    
  }

 async borrarCuenta(){
    this.bd.eliminarUsuario(this.usuario.idusuario);
    await this.bd.presentAlert("Cuenta borrada");
    localStorage.setItem('rol','0');
    this.rolStorage = localStorage.getItem('rol');
    this.permisos.setUserRole(parseInt(this.rolStorage));
    //Manejo del correo
    localStorage.setItem('correo','');
    this.correoStorage = localStorage.getItem('correo');
    this.sesion.setCorreoSesion(this.correoStorage);
    this.router.navigate(['']);
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
    console.log('cuerpoRut:', cuerpoRut);
    console.log('digitoVerificador:', digitoVerificador);


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



  ngOnInit() {
  
    this.correoUser = localStorage.getItem('correo');
  
    this.bd.dbState().subscribe(res => {
      if (res) {
        this.bd.fetchPregunta().subscribe(pregs =>{
          this.preguntas = pregs;
          console.log("OLA PAPUS: "+this.preguntas);
        });

        this.bd.buscarPorCorreo(this.correoUser).subscribe(items => {
          this.usuario = items[0];
          if (this.usuario) {
            this.nombre = this.usuario.nombre;
            this.apellido = this.usuario.apellido;
            this.rut = this.usuario.rut + "";
            this.dvrut = this.usuario.dvrut;
            this.correo = this.usuario.correo;
            this.respuesta = this.usuario.respuesta;
            this.direc = this.usuario.direccion;
            this.foto = this.usuario.fotousuario;
            this.fono = this.usuario.telefono;
            this.pregId = this.usuario.preguntau;
            console.log("Se encontró al usuario", this.usuario.nombre);
            console.log("ID usuario: " + this.usuario.idusuario);
            console.log("ID preg: "+this.pregId);

            if (this.preguntas && this.preguntas.length > 0) {
              this.preguntaseleccionada = this.preguntas.find((quest: { idpregunta: number; }) => quest.idpregunta === this.pregId);
            }

          } else {
            console.log("No se encontró ningún usuario con ese correo.");
          }
        });
      }
    })
  }
}
