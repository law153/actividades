import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  cantidad: string = "1";
  flag: boolean = true;
  msj: string = "";
  total: string= "5000";
  nombreProd: string="Producto ejemplo";
  precioProd: string="1000";
  imgProd: string="/assets/imagen.jpg";
  constructor(private router: Router,private menuCtrl: MenuController, private alerta: AlertController, private activeRouter: ActivatedRoute) { this.activeRouter.queryParams.subscribe(param => {
    if(this.router.getCurrentNavigation()?.extras.state){
      this.nombreProd = this.router.getCurrentNavigation()?.extras?.state?.["nombreEnviar"];
      this.precioProd = this.router.getCurrentNavigation()?.extras?.state?.["precioEnviar"];
      this.imgProd = this.router.getCurrentNavigation()?.extras?.state?.["imgEnviar"];
    }
  }) }

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

  Pagar(){
    this.presentAlert('Gracías por su compra');
  }

  irHistorial(){
    this.router.navigate(['historial-compra'])
  }

  envioValido(){
    this.cantidadValida()
    if(this.flag === true){
      this.Pagar();
    }
  }

  cantidadValida(){
    if(parseInt(this.cantidad) <= 0){
      this.flag = false;
      this.msj="La cantidad no puede ser igual o menor a 0";
      this.presentAlert(this.msj);
    }
  }

  async presentAlert(mensaje: string) {
    const alert = await this.alerta.create({
      header: 'Atención',
      subHeader: 'Mensaje importante',
      message: mensaje,
      buttons: ['Vale'],
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
