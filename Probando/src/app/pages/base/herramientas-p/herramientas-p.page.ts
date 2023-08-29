import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-herramientas-p',
  templateUrl: './herramientas-p.page.html',
  styleUrls: ['./herramientas-p.page.scss'],
})
export class HerramientasPPage implements OnInit {
  nombreProd: string="";
  constructor(private menuCtrl: MenuController, private router: Router, private activeRouter: ActivatedRoute) { this.activeRouter.queryParams.subscribe(param => {
    if(this.router.getCurrentNavigation()?.extras.state){
      this.nombreProd = this.router.getCurrentNavigation()?.extras?.state?.["nombreEnviar"];
    }
  })}

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

  comprar(){
    this.router.navigate(['ini-sesion']);
  }
  
  ngOnInit() {
  }

}
