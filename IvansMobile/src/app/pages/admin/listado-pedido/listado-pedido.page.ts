import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-listado-pedido',
  templateUrl: './listado-pedido.page.html',
  styleUrls: ['./listado-pedido.page.scss'],
})
export class ListadoPedidoPage implements OnInit {

  constructor(private menuCtrl: MenuController, private router: Router) { }

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

  irPedido(){
    this.router.navigate(['pedido']);
  }

  ngOnInit() {
  }

}