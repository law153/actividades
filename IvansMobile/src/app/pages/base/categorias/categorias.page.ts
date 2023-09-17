import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  idcate: number = 0;
  constructor(private menuCtrl: MenuController, private router: Router, private activeRouter: ActivatedRoute) {
    this.activeRouter.queryParams.subscribe(param => {
      if(this.router.getCurrentNavigation()?.extras.state){
        this.idcate = this.router.getCurrentNavigation()?.extras?.state?.["categoriaEnviar"];
      }
      }) 
   }
   

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
    this.router.navigate(['/electricidad-p'])   
  }

  ngOnInit() {
  }

}
