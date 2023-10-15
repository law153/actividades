import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { CorreoService } from 'src/app/services/correo.service';
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

  correoUser: any = "";
  fechaActual = new Date();
  fechaEntrega = new Date(this.fechaActual);
  diasSumar = 3;
  stock: number = 0;
  usuario: any = {idusuario: '', rut: '', dvrut: '', nombre: '', apellido: '', telefono: '', correo: '', clave: '', direccion: '', fotousuario: '', respuesta: '', rolu: '', preguntau: '' };
  carrito: any = {};
  detalles: any = [{iddetalle: '', cantidad: '', subtotal: '', ventad: '', productod: '', nombreprod: '', precio: '', stock: '', foto: ''}];
  hayCarrito: boolean = true;
  idusuario: number = 0;
  constructor(private router: Router,private menuCtrl: MenuController, private alerta: AlertController, private activeRouter: ActivatedRoute, private bd: DbserviceService,  private sesion: CorreoService) { 

    

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
    this.bd.modificarFechaEntrega(this.carrito.idventa, this.fechaEntrega);
    this.bd.modificarEstadoVenta(this.carrito.idventa, 'Comprado');

    for(let x of this.detalles){
      this.stock = x.stock - x.cantidad;
      console.log("Stock del producto: "+x.stock);
      console.log("Cantidad del detalle:"+x.cantidad);
      console.log("ID del producto: "+x.productod);
      this.bd.restarStock(x.productod, this.stock);
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

  ngOnInit() {
    this.correoUser = localStorage.getItem('correo');
    this.fechaEntrega.setDate(this.fechaActual.getDate() + this.diasSumar);
    this.bd.dbState().subscribe(res => {
      if (res) {

        this.bd.buscarPorCorreo(this.correoUser).subscribe(items => {

          this.usuario = items[0];
          console.log("Se encontró al usuario: ", this.usuario.nombre);
          this.idusuario = this.usuario.idusuario;
;
          this.bd.buscarVentaCarrito(this.idusuario, 'Activo').subscribe(carrito => {

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

        });

      }
    })
  }

}
