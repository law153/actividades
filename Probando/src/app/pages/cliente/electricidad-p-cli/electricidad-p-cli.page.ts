import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-electricidad-cli-p',
  templateUrl: './electricidad-p-cli.page.html',
  styleUrls: ['./electricidad-p-cli.page.scss'],
})
export class ElectricidadCliPPage implements OnInit {

  constructor(private menuCtrl: MenuController, private router: Router) { }

  abrirSuperior(){
    this.menuCtrl.enable(true, 'superior');
    this.menuCtrl.open('superior');
  }

  abrirCategorias(){
    this.menuCtrl.enable(true, 'categorias');
    this.menuCtrl.open('categorias');
  }

  irHomeCli(){
    this.router.navigate(['home-cli'])  
  }
  comprar(){
    this.router.navigate(['carrito']);
  }

  ngOnInit() {
  }

}
