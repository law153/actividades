import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.page.html',
  styleUrls: ['./herramientas.page.scss'],
})
export class HerramientasPage implements OnInit {

  constructor(private menuCtrl: MenuController, private router: Router) { }

    nombreProd: string = "Desatornillador cruz decker";
    //Funciones de menu
    abrirSuperior(){
      this.menuCtrl.enable(true, 'superior');
      this.menuCtrl.open('superior');
    }
  
    abrirCategorias(){
      this.menuCtrl.enable(true, 'categorias');
      this.menuCtrl.open('categorias');
    }

    irHome(){
      this.router.navigate([''])    
    }

    //De categoria
    irProducto(){
      let NavigationsExtra: NavigationExtras = {
        state: {
          nombreEnviar: this.nombreProd
        }
      };
      this.router.navigate(['/herramientas-p'], NavigationsExtra)   
    }

  ngOnInit() {
  }

}
