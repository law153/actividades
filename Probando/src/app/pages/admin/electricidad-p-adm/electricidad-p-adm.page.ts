import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-electricidad-adm-p',
  templateUrl: './electricidad-p-adm.page.html',
  styleUrls: ['./electricidad-p-adm.page.scss'],
})
export class ElectricidadAdmPPage implements OnInit {
  nombre: string = "Baterias Alcalinas";
  desc: string = "Baterias alcalinas de tipo AA no recargables de la marca Energizer";
  precio: string="15000";
  stock: number=1;
  medida: string = "Por par";
  categoria: string= "Electricidad";
  flag: boolean= true;
  msj: string="";

  constructor(private router: Router, private alerta: AlertController, private tostada: ToastController, private menuCtrl: MenuController) { }

  abrirSuperior(){
    this.menuCtrl.enable(true, 'superior');
    this.menuCtrl.open('superior');
  }

  abrirCategorias(){
    this.menuCtrl.enable(true, 'categorias');
    this.menuCtrl.open('categorias');
  }

  irHomeAdm(){
    this.router.navigate(['home-adm'])    
  }

  //Validaciones

  envioValido(){
    this.nombreValido();
    this.descValida();
    this.precioValido();
    this.stockValido();
    this.medidaValido;
    this.categoriaValido();
    if(this.flag === true){
      this.msj="Producto agregado correctamente";
      this.presentAlert(this.msj);
      this.irHomeAdm();
    } 
  }


  nombreValido(){
    if(this.primerCaracterEsMayus(this.nombre) ){
      this.flag = false;
      this.msj="La primera letra del nombre debe ser mayuscula";
      this.presentAlert(this.msj);
    } else if(this.nombre.length <= 9){
      this.flag = false;
      this.msj="La longitud del nombre debe ser mayor a 10 caracteres";
      this.presentAlert(this.msj);
    }
  }

  descValida(){
    if(this.primerCaracterEsMayus(this.desc) ){
      this.flag = false;
      this.msj="La primera letra de la descripción debe ser mayuscula";
      this.presentAlert(this.msj);
    } else if(this.desc.length <= 9){
      this.flag = false;
      this.msj="La longitud de la descripción debe ser mayor a 10 caracteres";
      this.presentAlert(this.msj);
    }
  }

  precioValido(){
    if(this.SoloNumeros(this.precio)){
      this.flag = false;
      this.msj="El precio debe estar compuesto solo de números";
      this.presentAlert(this.msj);
    } else if(parseInt(this.precio) <= 0){
      this.flag = false;
      this.msj="El precio no puede ser igual o menor a 0";
      this.presentAlert(this.msj);
    }
  }

  stockValido(){
    if(this.stock <= 0){
      this.flag = false;
      this.msj="El stock no puede ser igual o menor a 0";
      this.presentAlert(this.msj);
    }
  }

  medidaValido(){
    if(this.medida.length === 0){
      this.flag = false;
      this.msj="Debe seleccionar una unidad de medida";
      this.presentAlert(this.msj);
    }
  }

  categoriaValido(){
    if(this.medida.length === 0){
      this.flag = false;
      this.msj="Debe seleccionar una categoría";
      this.presentAlert(this.msj);
    }
  }



  //Funciones de validación
  primerCaracterEsMayus(texto: string): boolean {
    const primerCaracter = texto.charAt(0);
    return /[A-Z]/.test(primerCaracter);
  }

  SoloNumeros(cadena: string): boolean {
    return /^[0-9]+$/.test(cadena);
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
  }

}
