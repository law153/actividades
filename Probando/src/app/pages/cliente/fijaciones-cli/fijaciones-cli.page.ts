import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-fijaciones-cli',
  templateUrl: './fijaciones-cli.page.html',
  styleUrls: ['./fijaciones-cli.page.scss'],
})
export class FijacionesCliPage implements OnInit {

  constructor(private menuCtrl: MenuController, private router: Router) { }
    
    //Funciones de menu
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

    //De categoria
    irProducto(){
      this.router.navigate(['/fijaciones-cli-p'])   
    }

  ngOnInit() {
  }

}
