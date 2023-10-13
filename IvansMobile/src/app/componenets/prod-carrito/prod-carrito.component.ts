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
@Input() cantidadProd: string = "";
@Input() subtotal: string = "";
@Input() iddetalle: number = 0;
@Input() idventa: number = 0;

cantidad: number = parseInt(this.cantidadProd);
subtotal2: number = 0;
flag: boolean = true;
  constructor(private bd: DbserviceService) { }

  aprobarCambio(){
    this.flag = true;
    this.cantidadValida();
    if(this.flag){
      this.cambiarCantidad();
      this.bd.presentAlert("La cantidad se ha cambiado con exito");
    }
  }

  cambiarCantidad(){

    this.subtotal2 = parseInt(this.precioProd) * this.cantidad ;

    this.bd.modificarDetalle(this.iddetalle, this.subtotal2, this.cantidad );
    
    this.bd.presentAlert("La cantidad se ha cambiado con exito");
  }

  cantidadValida(){
    if(this.cantidad <= 0){
      this.bd.presentAlert("La cantidad definidad no es valida");
      this.flag = false;
    }
  }

  async borrarDetalle(){
    await this.bd.eliminarDetalle(this.iddetalle);
    this.bd.presentAlert("Se ha borrado el producto de su carrito");
    this.bd.buscarDetallesVenta(this.idventa).subscribe(detalles => {
      if(detalles.length <= 0){
        this.bd.modificarEstadoVenta(this.idventa, 'Inactivo');
      }
    });
  }

  ngOnInit() {
    this.bd.dbState().subscribe(res => {
      if (res) {
        console.log("La bd en el component ta bien :D");
        

      }
    })
  }

}
