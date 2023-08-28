import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-electricidad-cli-p',
  templateUrl: './electricidad-p-cli.page.html',
  styleUrls: ['./electricidad-p-cli.page.scss'],
})
export class ElectricidadCliPPage implements OnInit {

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
