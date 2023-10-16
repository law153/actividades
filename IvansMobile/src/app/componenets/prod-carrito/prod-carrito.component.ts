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

detalles: any[] = [];
carritoDetalles: any[] = [];
detalle: any = {iddetalle: '', cantidad: '', subtotal: '', ventad: '', productod: '', nombreprod: '', precio: '', stock: '', foto: ''};
venta: any = {idventa: "",fechaventa: "",estado: "",fechaentrega: "",total: "", carrito: "", usuariov: ""};
subtotal2: number = 0;
flag: boolean = true;
totalOld: number = 0;
totalNew: number = 0;

  constructor(private bd: DbserviceService, private carro: CarritoService) { }

  aprobarCambio(){

    this.flag = true;

    this.cantidadValida();

    if(this.flag){

      this.cambiarCantidad();
      this.bd.presentAlert("La cantidad se ha cambiado con exito");

    }
  }

  async cambiarCantidad(){

    await this.loadVenta();

    this.totalOld = this.venta.total;
    
    this.subtotal2 = parseInt(this.precioProd) * this.cantidadProd;

    this.totalNew = this.totalOld - parseInt(this.subtotal) + this.subtotal2;

    await this.bd.modificarDetalle(this.iddetalle, this.subtotal2, this.cantidadProd );

    await this.bd.modificarTotal(this.idventa,this.totalNew);

    this.loadDetalle();
    this.loadVenta();
    this.carro.actualizarDetalles(this.carritoDetalles);
    this.recargarPagina();
  }

  cantidadValida(){
    if(this.cantidadProd <= 0){
      this.bd.presentAlert("La cantidad definidad no es valida");
      this.flag = false;
    }
  }

  async borrarDetalle(){

    await this.loadVenta();
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
    this.carro.actualizarDetalles(this.carritoDetalles);
    
    await this.loadDetalle();
    await this.loadVenta();
    this.recargarPagina();

    
  }

  async loadDetalle() {
    this.bd.buscarDetallesVentaPorD(this.iddetalle).subscribe(detalle => {
      this.detalle = detalle[0];
    });
  }

  async loadVenta(){
    this.bd.buscarVenta(this.idventa);

    this.bd.fetchVenta().subscribe(item => {
      this.venta = item[0];
    })
  }

  recargarPagina() {
    window.location.reload();
  }
  

  ngOnInit() {
    this.bd.dbState().subscribe(res => {
      if (res) {
        console.log("La bd en el component ta bien :D");

      }
    })

    this.carro.detalles$.subscribe((detalles) => {
      this.detalles = detalles;
    });
  }

}
