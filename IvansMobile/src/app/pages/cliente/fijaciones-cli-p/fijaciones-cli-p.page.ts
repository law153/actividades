import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-fijaciones-cli-p',
  templateUrl: './fijaciones-cli-p.page.html',
  styleUrls: ['./fijaciones-cli-p.page.scss'],
})
export class FijacionesCliPPage implements OnInit {
  nombreProd: string = "Pestillo para puerta generico";
  precioProd: string = "5000";
  imgProd: string= "/assets/pestillo.jpg";

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
    this.router.navigate(['home-cli']);
  }
  comprar(){
    let NavigationsExtra: NavigationExtras = {
      state: {
        nombreEnviar: this.nombreProd,
        precioEnviar: this.precioProd,
        imgEnviar: this.imgProd
      }
    };
    this.router.navigate(['carrito'], NavigationsExtra);
  }

  ngOnInit() {
  }

}
