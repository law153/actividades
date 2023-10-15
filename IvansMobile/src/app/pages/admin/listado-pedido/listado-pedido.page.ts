import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-listado-pedido',
  templateUrl: './listado-pedido.page.html',
  styleUrls: ['./listado-pedido.page.scss'],
})
export class ListadoPedidoPage implements OnInit {

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

  irHomeAdm(){
    this.router.navigate(['home-adm'])    
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

    this.bd.dbState().subscribe(res => {
      if (res) {

        this.bd.buscarCompras('Comprado').subscribe(items => {

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
