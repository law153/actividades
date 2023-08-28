import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-fijaciones-cli-p',
  templateUrl: './fijaciones-cli-p.page.html',
  styleUrls: ['./fijaciones-cli-p.page.scss'],
})
export class FijacionesCliPPage implements OnInit {

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