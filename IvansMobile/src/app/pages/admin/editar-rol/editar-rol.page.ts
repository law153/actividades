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

  usuarios: any = [{idusuario: '',rut: '', dvrut: '', nombre: '', apellido: '', telefono: '', correo: '', clave: '', direccion: '', fotoUsuario: '', respuesta: '', rolU: '', preguntaU: ''}];

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
        this.bd.fetchUsuario().subscribe(items => {
          this.usuarios = items;
        })
      }

    })
  }

  cliente(id: number){
    this.bd.modificarRol(id, 1);

  }

  admin(id: number){
    this.bd.modificarRol(id, 2);
  }
}
