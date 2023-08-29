import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private router: Router,private menuCtrl: MenuController) { }

  irHomeCli(){
    this.router.navigate(['home-cli'])    
  }

  irEditar(){
    this.router.navigate(['editar-perfil'])    
  }

  irCambiarClave(){
    this.router.navigate(['cambiar-contra'])    
  }
  //Funciones de menu

  //abrir menus
  abrirSuperior(){
    this.menuCtrl.enable(true, 'superior');
    this.menuCtrl.open('superior');
  }

  abrirCategorias(){
    this.menuCtrl.enable(true, 'categorias');
    this.menuCtrl.open('categorias');
  }

  ngOnInit() {
  }

}
