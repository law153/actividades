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
    this.router.navigate(['home-cli'])    
  }
  //Funciones de menu

  //abrir menus
  abrirSuperior(){
    this.menuCtrl.enable(true, 'superiorCli');
    this.menuCtrl.open('superiorCli');
  }

  abrirCategorias(){
    this.menuCtrl.enable(true, 'categoriasCli');
    this.menuCtrl.open('categoriasCli');
  }
  
  ngOnInit() {
  }

}
