import { Component, OnInit, Input } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';

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
@Input() totalOld: number = 0;
idUser: any = 0;
detalles: any[] = [];

detalle: any = {iddetalle: '', cantidad: '', subtotal: '', ventad: '', productod: '', nombreprod: '', precio: '', stock: '', foto: ''};

subtotal2: number = 0;
flag: boolean = true;
totalNew: number = 0;
producto: any = {};

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

    
    console.log("Total viejo: " +this.totalOld);

    this.subtotal2 = parseInt(this.precioProd) * this.cantidadProd;
    console.log("Subtotal nuevo: "+this.subtotal2);
    console.log("Subtotal viejo: "+this.subtotal);
    this.totalNew = this.totalOld - parseInt(this.subtotal) + this.subtotal2;
    console.log("Total nuevo: "+this.totalNew);

    await this.bd.modificarDetalle(this.iddetalle, this.subtotal2, this.cantidadProd );

    await this.bd.modificarTotal(this.idventa,this.totalNew);

    
    
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

    this.totalNew = this.totalOld - parseInt(this.subtotal);

    await this.bd.eliminarDetalle(this.iddetalle);

    this.bd.modificarTotal(this.idventa, this.totalNew);
    this.bd.presentAlert("Se ha borrado el producto de su carrito");

  
    this.bd.buscarDetallesVenta(this.idventa).subscribe(detalles => {
      if(detalles.length <= 0){
        this.bd.modificarEstadoVenta(this.idventa, 'Inactivo');
      }

    });
    
  }

  
  

  async ngOnInit() {

    this.idUser = localStorage.getItem('usuario');

    try{

      const producto = await this.bd.buscarProducto2(this.idprod);
      this.producto = producto[0];

    }catch(error){

      console.error("Error al buscar el producto", error);

    }

  }

}
