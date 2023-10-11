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

  correoUser: string = "";
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
    this.sesion.fetchCorreoSesion().subscribe((correo) => {
      this.correoUser = correo;
    });

    this.bd.dbState().subscribe(res => {
      if (res) {

        this.bd.buscarPorCorreo(this.correoUser).subscribe(items => {

          this.usuario = items[0];
          console.log("Se encontró al usuario: ", this.usuario.nombre);
          this.idusuario = this.usuario.idusuario;

          console.log("ID del usuario: "+this.usuario.idusuario);
          this.bd.buscarVentaCarrito(this.idusuario, 'Activo');

          this.bd.fetchVenta().subscribe((items) => {

            if (items.length > 0) {
              this.carrito = items[0];
              this.hayCarrito = true;
              console.log("ID del carrito: "+this.carrito.idventa);
              this.bd.buscarDetallesVenta(this.carrito.idventa);
              this.bd.fetchDetallesVenta().subscribe((detalles) => {
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
