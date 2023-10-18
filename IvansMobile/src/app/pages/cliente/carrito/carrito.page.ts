import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { CorreoService } from 'src/app/services/correo.service';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { CarritoService } from 'src/app/services/carrito.service';
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

  
  detallesSer: any[] = [];
  fechaActual = new Date();
  fechaEntrega = new Date(this.fechaActual);
  diasSumar = 3;
  stock: number = 0;
  idUser: any = 0;
 
  carrito: any = {};
  producto: any = [{codprod:'', nombreprod:'', descripcion: '', precio:'', stock: '', foto:'', unidadmedida: '', categoriap: ''}];
  detalles: any = [{iddetalle: '', cantidad: '', subtotal: '', ventad: '', productod: '', nombreprod: '', precio: '', stock: '', foto: ''}];
  hayCarrito: boolean = true;
  idusuario: number = 0;

  constructor(private router: Router,private menuCtrl: MenuController, private alerta: AlertController, private activeRouter: ActivatedRoute, private bd: DbserviceService, private carro: CarritoService) { 

    

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


  async Pagar(){
    this.fechaEntrega.setDate(this.fechaActual.getDate() + this.diasSumar);

    this.bd.modificarFechaEntrega(this.carrito.idventa, this.fechaEntrega);
    this.bd.modificarEstadoVenta(this.carrito.idventa, 'Comprado');

    //Restar del stock
    for(let x of this.detalles){
      
      this.stock = x.stock - x.cantidad;
      console.log("Stock del producto: "+x.stock);
      console.log("Cantidad del detalle:"+x.cantidad);
      console.log("ID del producto: "+x.productod);
      this.bd.restarStock(x.productod, this.stock);
      await this.bd.buscarProducto(x.productod);

      this.bd.fetchProducto().subscribe(item => {
        this.producto = item[0];
      })

    }
    this.presentAlert('Gracías por su compra');
  }


  irHistorial(){
    this.router.navigate(['historial-compra'])
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

  async actualizarVenta(){
    this.bd.buscarVentaCarrito(this.idUser, 'Activo').subscribe(carrito => {

      this.carrito = carrito[0];

      this.bd.buscarDetallesVenta(this.carrito.idventa).subscribe(detalles => {

        this.detalles = detalles; // Actualiza la lista de detalles

      });

    });
  }

  ngOnInit() {
    this.idUser = localStorage.getItem('usuario');

    console.log(this.idUser);

  

          this.bd.buscarVentaCarrito(this.idUser, 'Activo').subscribe(carrito => {

            if (carrito.length === 1) {

              this.carrito = carrito[0];
              this.hayCarrito = true;
              console.log("ID del carrito: "+this.carrito.idventa);

              this.bd.buscarDetallesVenta(this.carrito.idventa).subscribe(detalles => {

                this.detalles = detalles; // Actualiza la lista de detalles

              });

              

            } else {
              this.hayCarrito = false; // No se encontró un carrito activo
              this.bd.presentAlert("No hay un carrito activo!");
            }

            console.log("Estado del carrito: "+this.hayCarrito);

          });

     

  }

}
