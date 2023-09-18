import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  constructor(private menuCtrl: MenuController, private router: Router, private activeRouter: ActivatedRoute) { }


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
  /*
  insertar(){
    this.db.agregar(this.nombreRol)
    this.db.presentAlert("Registro Realizado");
    this.router.navigate(['']);
  }

  editar(){
    this.db.modificar(this.idRol, this.nombreRol);
    this.db.presentAlert("Cambio Realizado");
    this.router.navigate(['']);
  }
  


  ///En caso de que se generen botones de eliminar con un for
  borrar(x: any){
    this.db.eliminar(x.id);
    this.db.presentAlert("Cambio Realizado");
  }
  */
  ngOnInit() {
  }

}
