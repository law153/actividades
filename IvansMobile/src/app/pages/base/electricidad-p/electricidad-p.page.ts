import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-electricidad-p',
  templateUrl: './electricidad-p.page.html',
  styleUrls: ['./electricidad-p.page.scss'],
})
export class ElectricidadPPage implements OnInit {

  constructor(private menuCtrl: MenuController, private router: Router) { }

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

  comprar(){
    this.router.navigate(['ini-sesion']);
  }

  ngOnInit() {
  }

}