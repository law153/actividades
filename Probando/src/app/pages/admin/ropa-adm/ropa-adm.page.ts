import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-ropa-adm',
  templateUrl: './ropa-adm.page.html',
  styleUrls: ['./ropa-adm.page.scss'],
})
export class RopaAdmPage implements OnInit {

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
