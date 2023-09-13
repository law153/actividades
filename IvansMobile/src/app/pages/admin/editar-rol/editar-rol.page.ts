import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-editar-rol',
  templateUrl: './editar-rol.page.html',
  styleUrls: ['./editar-rol.page.scss'],
})
export class EditarRolPage implements OnInit {

  usuarios: any =[{id: '1', nombre: 'Javier'},{id:'2', nombre: 'Pedro'}];
  roles: any =[{nombre_rol: 'a', id_rol: '1'}];


  constructor(private menuCtrl: MenuController, private router: Router, private bd: DbserviceService) { }

  abrirSuperior(){
    this.menuCtrl.enable(true, 'superior');
    this.menuCtrl.open('superior');
  }

  abrirCategorias(){
    this.menuCtrl.enable(true, 'categorias');
    this.menuCtrl.open('categorias');
  }

  irHomeAdm(){
    this.router.navigate(['home-adm'])    
  }

  ngOnInit() {
    this.bd.dbState().subscribe(res => {
      if(res){
        this.bd.fetchRol().subscribe(item =>{
          this.roles = item;
        })
      }
    })

  }

  modificar(x: any){
    let navigationExtras: NavigationExtras = {
      state: {
      idEnviado: x.id_rol,
      nombreEnviado: x.nombre_rol
    }}
    this.router.navigate([''], navigationExtras)
  }

  eliminar(x: any){
    //Llamar a la función delete
  }

}
