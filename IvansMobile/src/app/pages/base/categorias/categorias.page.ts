import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  idcate: number = 0;
  productos: any = [{codprod: '', nombreprod: '', descripcion: '', precio: '', stock: '', foto: '', unidadmedida: '', categoriap: ''}];

  constructor(private menuCtrl: MenuController, private router: Router, private activeRouter: ActivatedRoute, private bd: DbserviceService ) {
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

    this.bd.dbState().subscribe(res => {
      if(res){
        this.bd.fetchProducto().subscribe(items => {
          this.productos = items;
        })
      }
    })
    
  }

}
