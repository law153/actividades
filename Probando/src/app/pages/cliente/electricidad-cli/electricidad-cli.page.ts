import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-electricidad-cli',
  templateUrl: './electricidad-cli.page.html',
  styleUrls: ['./electricidad-cli.page.scss'],
})
export class ElectricidadCliPage implements OnInit {

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
      this.router.navigate(['/electricidad-cli-p'])   
    }

    ngOnInit() {
    }

}
