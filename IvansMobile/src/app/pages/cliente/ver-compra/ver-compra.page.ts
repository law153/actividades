import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-ver-compra',
  templateUrl: './ver-compra.page.html',
  styleUrls: ['./ver-compra.page.scss'],
})
export class VerCompraPage implements OnInit {

  constructor(private menuCtrl: MenuController, private router: Router) { }
  
  abrirSuperior(){
    this.menuCtrl.enable(true, 'superior');
    this.menuCtrl.open('superior');
  }

  abrirCategorias(){
    this.menuCtrl.enable(true, 'categorias');
    this.menuCtrl.open('categorias');
  }

  irHomeCli(){
    this
  }

  ngOnInit() {
  }

}
