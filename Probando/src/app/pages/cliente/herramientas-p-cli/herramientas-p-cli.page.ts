import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-herramientas-cli-p',
  templateUrl: './herramientas-p-cli.page.html',
  styleUrls: ['./herramientas-p-cli.page.scss'],
})
export class HerramientasCliPPage implements OnInit {

  constructor(private menuCtrl: MenuController, private router: Router) { }

  abrirSuperior(){
    this.menuCtrl.enable(true, 'superiorCli');
    this.menuCtrl.open('superiorCli');
  }

  abrirCategorias(){
    this.menuCtrl.enable(true, 'categoriasCli');
    this.menuCtrl.open('categoriasCli');
  }

  irHomeCli(){
    this.router.navigate(['home-cli'])  
  }

  ngOnInit() {
  }

}
