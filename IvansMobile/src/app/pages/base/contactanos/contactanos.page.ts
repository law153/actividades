import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { GoogleMap, Marker, Polyline } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation'

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.page.html',
  styleUrls: ['./contactanos.page.scss'],
})
export class ContactanosPage implements OnInit, AfterViewInit {

  msjNombre: string = "";
  msjAsunto: string = "";
  msjCuerpo: string = "";




  nombre: string ="";
  asunto: string= "";
  cuerpo: string="";
  msj: string="";
  flag: boolean = true;

  //Weas de maps
  apiKey = 'AIzaSyDJTdmms9SBC4FoA-p-SzALWmeUReSf4IY';

  mapRef: HTMLElement | null = null;

  latitud: number = 0;

  longitud: number = 0;

  latiDuoc: number = -33.36329660178706;

  longiDuoc: number = -70.75316140662984;

  constructor(private menuCtrl: MenuController, private router: Router, private alerta: AlertController, private bd: DbserviceService) { }

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
    this.nombre = "";
    this.asunto = "";
    this.cuerpo = "";
  }

  async obtenerUbicacion() {
    const coordinates = await Geolocation.getCurrentPosition();

    this.latitud = coordinates.coords.latitude;
    this.longitud = coordinates.coords.longitude;
    
  }

  //Validaciones

  envioValido(){
    this.flag = true;
    this.nombreValido()
    this.asuntoValido();
    this.cuerpoValido();
    if(this.flag === true){
      this.agregar();
    }
  }

  nombreValido(){
    this.msjNombre = "";
    if(this.nombre.length <= 1){
      this.flag = false;
      this.msjNombre+="El nombre debe tener al menos dos carácteres"+"\n";

    }
    if(this.contieneCaracterEspecial(this.nombre) === true){
      this.flag = false;
      this.msjNombre+="Un nombre no contiene carácteres especiales"+"\n";

    }
    if(this.contieneNumero(this.nombre) === true){
      this.flag = false;
      this.msjNombre+="Un nombre no contiene números"+"\n";

    }
  }

  asuntoValido(){
    this.msjAsunto = "";
    if(this.asunto.length <= 10){
      this.flag = false;
      this.msjAsunto="El asunto debe tener al menos 10 caracteres";

    }
  }

  cuerpoValido(){
    this.msjCuerpo = "";
    if(this.cuerpo.length <= 10){
      this.flag = false;
      this.msjCuerpo="El cuerpo debe tener al menos 10 caracteres";

    }
  }

  agregar(){
    this.bd.agregarConsulta(this.nombre,this.asunto, this.cuerpo);
    this.bd.presentAlert("Consulta enviada con exito");
    this.limpiar();
  }

   //Funciones de validación
  contieneCaracterEspecial(texto: string): boolean {
    return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(texto);
  }
  
  // Función para verificar si una cadena contiene al menos un número
  contieneNumero(texto: string): boolean {
    return /\d/.test(texto);
  }
  primerCaracterEsMayus(texto: string): boolean {
    const primerCaracter = texto.charAt(0);
    return /[A-Z]/.test(primerCaracter);
  }

  async presentAlert(mensaje: string) {
    const alert = await this.alerta.create({
      header: 'Atención',
      subHeader: '',
      message: mensaje,
      buttons: ['Vale'],
    });

    await alert.present();
  }

  ngOnInit() {
  }

  async ngAfterViewInit() {

    await this.obtenerUbicacion();

    // Accedemos al elemento del mapa una vez que la vista se ha inicializado
    this.mapRef = document.getElementById('map');
    if (this.mapRef) {
      this.inicializarMapa();
    } else {
      console.error('Elemento del mapa no encontrado');
    }
  }

  async inicializarMapa() {
    const apiKey = 'AIzaSyDJTdmms9SBC4FoA-p-SzALWmeUReSf4IY'; // Reemplaza con tu propia clave de API

    const ubicacionUser = {lat: this.latitud, lng: this.longitud};
    const ubicacionDestino = {lat: this.latiDuoc, lng: this.longiDuoc}

    if (this.mapRef) {
      const newMap = GoogleMap.create({
        id: 'my-map',
        element: this.mapRef,
        apiKey: apiKey,
        config: {
          center: {
            lat: this.latitud,
            lng: this.longitud,
          },
          zoom: 10,
        },
      });

      const linea: Polyline[] = [{path: [ {lat: this.latitud, lng: this.longitud}, {lat: this.latiDuoc, lng: this.longiDuoc}], strokeColor: '#55aa58', strokeWeight: 5, geodesic: true }];
      const marker: Marker = { coordinate: {lat: this.latiDuoc, lng: this.longiDuoc }, title: 'Tienda', snippet: "Sede de Ivan's"};
      (await newMap).addMarker(marker);
      (await newMap).addPolylines(linea);
    }
  }

  

}








