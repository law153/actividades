import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-herramientas-p-adm',
  templateUrl: './herramientas-p-adm.page.html',
  styleUrls: ['./herramientas-p-adm.page.scss'],
})
export class HerramientasPAdmPage implements OnInit {

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

  ngOnInit() {
  }

}
