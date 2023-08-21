import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-herramientas-p-cli',
  templateUrl: './herramientas-p-cli.page.html',
  styleUrls: ['./herramientas-p-cli.page.scss'],
})
export class HerramientasPCliPage implements OnInit {

  constructor(private menuCtrl: MenuController, private router: Router) { }


  abrirSuperior(){
    this.menuCtrl.enable(true, 'superior');
    this.menuCtrl.open('superior');
  }

  abrirCategorias(){
    this.menuCtrl.enable(true,'categorias');
    this.menuCtrl.open('categorias');
  }

  irHome(){
    this.router.navigate([''])
  }

  ngOnInit() {
  }

}
