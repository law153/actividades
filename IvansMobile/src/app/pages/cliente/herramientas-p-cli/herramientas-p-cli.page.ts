import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-herramientas-cli-p',
  templateUrl: './herramientas-p-cli.page.html',
  styleUrls: ['./herramientas-p-cli.page.scss'],
})
export class HerramientasCliPPage implements OnInit {
  nombreProd: string = "Desatornillador de cruz Decker";
  precioProd: string = "13000";
  imgProd: string= "/assets/destornillador.jpg";
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
