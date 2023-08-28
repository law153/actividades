import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-gasfiteria-cli',
  templateUrl: './gasfiteria-cli.page.html',
  styleUrls: ['./gasfiteria-cli.page.scss'],
})
export class GasfiteriaCliPage implements OnInit {

  constructor(private menuCtrl: MenuController, private router: Router) { }
    
    //Funciones de menu
    abrirSuperior(){
      this.menuCtrl.enable(true, 'superior');
      this.menuCtrl.open('superior');
    }
  
    abrirCategorias(){
      this.menuCtrl.enable(true, 'categorias');
      this.menuCtrl.open('categorias');
    }

    irHomeCli(){
      this.router.navigate(['home-cli'])    
    }

    ngOnInit() {
    }

}
