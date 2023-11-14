import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-historial-compra',
  templateUrl: './historial-compra.page.html',
  styleUrls: ['./historial-compra.page.scss'],
})
export class HistorialCompraPage implements OnInit {
  
  
  detalles: any = [{iddetalle: '', cantidad: '', subtotal: '', ventad: '', productod: '', nombreprod: '', precio: '', stock: '', foto: ''}];
  idUser: any = 0;
  compras: any = [{idventa: '',fechaventa: '',estado: '',fechaentrega: '',total: '',carrito: '',usuariov: ''}];
  hayCompras: boolean = true;
  
  constructor(private menuCtrl: MenuController, private router: Router, private bd: DbserviceService) { }

  abrirSuperior(){
    this.menuCtrl.enable(true, 'superior');
    this.menuCtrl.open('superior');
  }

  abrirCategorias(){
    this.menuCtrl.enable(true, 'categorias');
    this.menuCtrl.open('categorias');
  }

  irHomeCli(){
    this.router.navigate(['']);  
  }

  irPedido(id: any){
    console.log("ID de la venta enviado a ver-compra: "+id);
    
    let NavigationsExtra: NavigationExtras = {
      state: {
        idEnviar: id
      }
    };
    
    this.router.navigate(['ver-compra'], NavigationsExtra);
  }

  ngOnInit() {
    this.idUser = localStorage.getItem('usuario');

    this.bd.dbState().subscribe(res => {
      if (res) {
;
          this.bd.buscarVentaCarrito(this.idUser, 'Comprado').subscribe(items => {

            if (items.length > 0) {

              this.compras = items;
              this.hayCompras = true;


            } else {

              this.hayCompras = false; // No se encontraron compras
              this.bd.presentAlert("No hay compras previas");
            }

            console.log("Estado del carrito: "+this.hayCompras);

          });

        

      }
    })

  }

}
