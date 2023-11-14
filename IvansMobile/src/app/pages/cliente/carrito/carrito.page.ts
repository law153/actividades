import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
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
  idVenta: number = 0;
  carrito: any = {};
  producto: any = [{codprod:'', nombreprod:'', descripcion: '', precio:'', stock: '', foto:'', unidadmedida: '', categoriap: ''}];
  detalles: any = [{iddetalle: '', cantidad: '', subtotal: '', ventad: '', productod: '', nombreprod: '', precio: '', stock: '', foto: ''}];
  hayCarrito: boolean = true;
  idusuario: number = 0;

  constructor(private router: Router,private menuCtrl: MenuController, private alerta: AlertController, private bd: DbserviceService, private carro: CarritoService) { 

    

  }

  irHomeCli(){
    this.router.navigate([''])    
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
      
      
      this.bd.restarStock(x.productod, x.cantidad);
      //Respecto al detalle comprado
      try{
        
        const producto = await this.bd.buscarProducto2(x.productod);
        this.producto = producto[0];
        console.log("Valor de ventad: "+x.ventad);
        console.log("Valor de carrito.idventa: "+this.carrito.idventa);
        this.bd.agregarDetalleCompra(this.producto.nombreprod, this.producto.foto, x.cantidad, x.subtotal, x.ventad);
        console.log("Agregado el detalle de compra!");
      }catch(error){
  
        console.error("Error al buscar el producto", error);
  
      }

    }
    
    await this.presentAlert('Gracías por su compra');
    this.hayCarrito = false;
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


  async suscribirObservables(){

    this.bd.buscarVentaCarrito3(this.idUser, 'Activo');

    this.bd.fetchVenta().subscribe(carrito => {

        this.carrito = carrito[0];

        this.idVenta = this.carrito.idventa;
        this.bd.buscarDetallesVenta3(this.carrito.idventa);

        this.bd.fetchDetallesVenta().subscribe(detalles => {
          this.detalles = detalles;
        })

    })

  }

  async ngOnInit() {
    
    this.idUser = localStorage.getItem('usuario');
    
    this.bd.dbState().subscribe(async res => {
      if (res) {        
        try{
          const carrito = await this.bd.buscarVentaCarrito2(this.idUser, 'Activo');
    
          if(carrito.length > 0){
            this.hayCarrito = true; // Se encontró un carrito activo
            
            await this.suscribirObservables();
            
          }else{
            this.hayCarrito = false; // No se encontró un carrito activo
            this.bd.presentAlert("No hay un carrito activo!");
            
          }
    
        }catch(error){
    
          console.error("Error al buscar el carrito", error);
    
        }
      }
    })

  }

}
