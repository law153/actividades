import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-fijaciones-p',
  templateUrl: './fijaciones-p.page.html',
  styleUrls: ['./fijaciones-p.page.scss'],
})
export class FijacionesPPage implements OnInit {

  constructor(private menuCtrl: MenuController, private router: Router) { }

  abrirSuperior(){
    this.menuCtrl.enable(true, 'superior');
    this.menuCtrl.open('superiorCli');
  }

  abrirCategorias(){
    this.menuCtrl.enable(true, 'categorias');
    this.menuCtrl.open('categoriasCli');
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
