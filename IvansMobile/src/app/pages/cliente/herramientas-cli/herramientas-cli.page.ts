import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-herramientas-cli',
  templateUrl: './herramientas-cli.page.html',
  styleUrls: ['./herramientas-cli.page.scss'],
})
export class HerramientasCliPage implements OnInit {

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

    //De categoria
    irProducto(){
      this.router.navigate(['/herramientas-cli-p'])   
    }

    ngOnInit() {
    }

}
