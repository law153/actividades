import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular'; 
import { ApiexternaService } from '../services/apiexterna.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  //Variables
  

  nombreRol: string = "";
  idRol: string = "";
  apiArreglo: any={};
  valorUltimo: number = 0;
  //Constructor

  constructor(private router: Router, private menuCtrl: MenuController, private api: ApiexternaService ) {}
  
  //Metodos


  irHome(){
    this.router.navigate([''])    
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
    this.api.convertCurrency('USD','CLP',1).subscribe((res)=>{
      console.log(res);
      this.apiArreglo = res;
    
    })

    this.valorUltimo = this.apiArreglo.result;

  }


}