import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-kits',
  templateUrl: './kits.page.html',
  styleUrls: ['./kits.page.scss'],
})
export class KitsPage implements OnInit {

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
