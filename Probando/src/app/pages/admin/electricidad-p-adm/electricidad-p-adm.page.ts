import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-electricidad-adm-p',
  templateUrl: './electricidad-p-adm.page.html',
  styleUrls: ['./electricidad-p-adm.page.scss'],
})
export class ElectricidadAdmPPage implements OnInit {

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
