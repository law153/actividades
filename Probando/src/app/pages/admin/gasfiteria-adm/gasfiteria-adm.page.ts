import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-gasfiteria-adm',
  templateUrl: './gasfiteria-adm.page.html',
  styleUrls: ['./gasfiteria-adm.page.scss'],
})
export class GasfiteriaAdmPage implements OnInit {

  constructor(private menuCtrl: MenuController, private router: Router) { }

  abrirSuperior(){
    this.menuCtrl.enable(true, 'superiorAdm');
    this.menuCtrl.open('superiorCli');
  }

  abrirCategorias(){
    this.menuCtrl.enable(true, 'categoriasAdm');
    this.menuCtrl.open('categoriasCli');
  }

  irHomeAdm(){
    this.router.navigate(['home-adm'])    
  }

  ngOnInit() {
  }

}