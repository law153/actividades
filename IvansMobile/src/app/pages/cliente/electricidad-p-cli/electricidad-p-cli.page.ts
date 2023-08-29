import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-electricidad-cli-p',
  templateUrl: './electricidad-p-cli.page.html',
  styleUrls: ['./electricidad-p-cli.page.scss'],
})
export class ElectricidadCliPPage implements OnInit {
  nombreProd: string = "Baterias Alcalinas";
  precioProd: string = "15000";
  imgProd: string= "/assets/Bateria.jpg";
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
