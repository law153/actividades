import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  cantidad: string = "0";
  flag: boolean = true;
  msj: string = "";
  total: string= "";

  idusuario: number = 200;
  carrito: any = {};
  detalles: any = [{iddetalle: '', cantidad: '', subtotal: '', ventad: '', productod: '', nombreprod: '', precio: '', stock: '', foto: ''}];
  hayCarrito: boolean = false;
  constructor(private router: Router,private menuCtrl: MenuController, private alerta: AlertController, private activeRouter: ActivatedRoute, private bd: DbserviceService) { 
  }

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
    this.bd.dbState().subscribe(res => {
      if (res) {
        this.bd.buscarVentaCarrito(this.idusuario, 'Activo');
    
        this.bd.fetchVenta().subscribe(items => {
          if (items.length > 0) {
            //Se encontró un carrito activo
            this.carrito = items[0];
            this.hayCarrito = true;
            this.bd.buscarDetallesVenta(this.carrito.idventa);
            this.bd.fetchDetallesVenta().subscribe(items => {
              this.detalles = items;
            })

            

          } else {
            // No se encontraron un carrito activo
            this.bd.presentAlert('No hay un carrito activo');
          }
        })
      }
    })

  }

}
