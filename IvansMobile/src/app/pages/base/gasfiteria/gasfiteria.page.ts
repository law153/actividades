import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-gasfiteria',
  templateUrl: './gasfiteria.page.html',
  styleUrls: ['./gasfiteria.page.scss'],
})
export class GasfiteriaPage implements OnInit {

  constructor(private menuCtrl: MenuController, private router: Router) { }
  //Funciones de menu
  abrirSuperior(){
    this.menuCtrl.enable(true, 'superior');
    this.menuCtrl.open('superior');
  }

  abrirCategorias(){
    this.menuCtrl.enable(true, 'categorias');
    this.menuCtrl.open('categorias');
  }

  irHome(){
    this.router.navigate([''])    
  }

  ngOnInit() {
  }

}
