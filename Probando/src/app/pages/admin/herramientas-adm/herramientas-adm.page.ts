import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-herramientas-adm',
  templateUrl: './herramientas-adm.page.html',
  styleUrls: ['./herramientas-adm.page.scss'],
})
export class HerramientasAdmPage implements OnInit {

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

  irProducto(){
    this.router.navigate(['herramientas-p-adm']);
  }

  ngOnInit() {
  }

}
