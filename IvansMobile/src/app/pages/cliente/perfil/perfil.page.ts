import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { CorreoService } from 'src/app/services/correo.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  
  
  correoUser: any = "";
  usuario: any = {idusuario: '', rut: '', dvrut: '', nombre: '', apellido: '', telefono: '', correo: '', clave: '', direccion: '', fotousuario: '', respuesta: '', rolu: '', preguntau: '' };

  constructor(private router: Router,private menuCtrl: MenuController, private bd: DbserviceService, private sesion: CorreoService) { }

  irHomeCli(){
    this.router.navigate([''])    
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

    this.correoUser = localStorage.getItem('correo');

    this.bd.dbState().subscribe(res => {
      if(res){
        this.bd.buscarPorCorreo(this.correoUser).subscribe(items => {
          this.usuario = items[0];
        });
      }
    })
    
  }

}
