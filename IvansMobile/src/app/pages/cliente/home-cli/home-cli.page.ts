import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home-cli',
  templateUrl: './home-cli.page.html',
  styleUrls: ['./home-cli.page.scss'],
})
export class HomeCliPage implements OnInit {

  constructor(private router: Router,private menuCtrl: MenuController) { }

  irHomeCli(){
    this.router.navigate([''])    
  }
  //Funciones de menu

  //abrir menus
  abrirSuperior(){
    this.menuCtrl.enable(true, 'superior');
    this.menuCtrl.open('superior');
  }

  abrirCategorias(){
    this.menuCtrl.enable(true, 'categorias');
    this.menuCtrl.open('categorias');
  }
  
  ngOnInit() {
    this.router.navigate(['carrito'])   
  }

}
