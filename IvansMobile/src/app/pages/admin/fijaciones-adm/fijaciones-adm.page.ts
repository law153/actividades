import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-fijaciones-adm',
  templateUrl: './fijaciones-adm.page.html',
  styleUrls: ['./fijaciones-adm.page.scss'],
})
export class FijacionesAdmPage implements OnInit {

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
    this.router.navigate(['fijaciones-adm-p']);
  }

  ngOnInit() {
  }

}
