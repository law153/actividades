import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { Usuario } from 'src/app/services/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuarioActual!: Usuario;
  idUsuario: number = 200;
  constructor(private router: Router,private menuCtrl: MenuController, private bd: DbserviceService) { }

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

  mostrarDatosUsuario() {
    this.bd.listaUsuario.subscribe((usuarios: Usuario[]) => {
      if (usuarios.length > 0) {
        const usuario = usuarios[0]; // El primer usuario encontrado
        // Asigna el usuario a una propiedad local.
        this.usuarioActual = usuario;
      }
    });
  }

  ngOnInit() {
    this.bd.buscarUsuario(this.idUsuario).then(() => {
      this.mostrarDatosUsuario();
    });
  }

}
