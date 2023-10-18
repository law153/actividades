import { Component, OnInit, Input } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-prod-carrito',
  templateUrl: './prod-carrito.component.html',
  styleUrls: ['./prod-carrito.component.scss'],
})
export class ProdCarritoComponent  implements OnInit {
@Input() nombreProd: string = "";
@Input() imagenProd: string = "";
@Input() precioProd: string = "";
@Input() cantidadProd: number = 0;
@Input() subtotal: string = "";
@Input() iddetalle: number = 0;
@Input() idventa: number = 0;
@Input() idprod: number = 0;

idUser: any = 0;
detalles: any[] = [];

detalle: any = {iddetalle: '', cantidad: '', subtotal: '', ventad: '', productod: '', nombreprod: '', precio: '', stock: '', foto: ''};

venta: any = {idventa: "",fechaventa: "",estado: "",fechaentrega: "",total: "", carrito: "", usuariov: ""};
subtotal2: number = 0;
flag: boolean = true;
totalOld: number = 0;
totalNew: number = 0;
producto: any = [];

  constructor(private bd: DbserviceService) { }

  aprobarCambio(){

    this.flag = true;

    this.cantidadValida();

    if(this.flag){

      this.cambiarCantidad();
      this.bd.presentAlert("La cantidad se ha cambiado con exito");

    }
  }

  async cambiarCantidad(){

    this.totalOld = this.venta.total;
    
    this.subtotal2 = parseInt(this.precioProd) * this.cantidadProd;

    this.totalNew = this.totalOld - parseInt(this.subtotal) + this.subtotal2;

    await this.bd.modificarDetalle(this.iddetalle, this.subtotal2, this.cantidadProd );

    await this.bd.modificarTotal(this.idventa,this.totalNew);

    this.actualizarCarrito();
    
  }

  cantidadValida(){
    if(this.cantidadProd <= 0){
      this.bd.presentAlert("La cantidad definida no es valida");
      this.flag = false;
    }

    if(this.cantidadProd > this.producto.stock){
      this.bd.presentAlert("La cantidad definida es mayor al stock disponible");
      this.flag = false;
    }
  }

  async borrarDetalle(){

    
    this.totalOld = this.venta.total;
    this.totalNew = this.totalOld - parseInt(this.subtotal);
    await this.bd.eliminarDetalle(this.iddetalle);

    this.bd.modificarTotal(this.idventa, this.totalNew);
    this.bd.presentAlert("Se ha borrado el producto de su carrito");

  
    this.bd.buscarDetallesVenta(this.idventa).subscribe(detalles => {
      if(detalles.length <= 0){
        this.bd.modificarEstadoVenta(this.idventa, 'Inactivo');
        
      }

    });
    this.actualizarCarrito();
    

    
  }

  


  recargarPagina() {
    window.location.reload();
  }
  
  actualizarCarrito(){

        this.bd.buscarVentaCarrito(this.idUser, 'Activo').subscribe(carrito => {

          this.venta = carrito[0];
    
          this.bd.buscarDetallesVenta(this.venta.idventa).subscribe(detalles => {
    
            this.detalles = detalles; // Actualiza la lista de detalles
    
          });
    
        });
  }

  ngOnInit() {

    this.idUser = localStorage.getItem('usuario');
    this.bd.dbState().subscribe(res => {
      if (res) { 
        this.bd.buscarProducto(this.idprod);
        this.bd.fetchProducto().subscribe(item =>{
          this.producto = item;
        })
      }})

  }

}
