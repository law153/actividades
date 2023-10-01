import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { CateupdateService } from 'src/app/services/cateupdate.service';
import { PermisosService } from './services/permisos.service';
import { CorreoService } from './services/correo.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  variableStorage: any = "";
  
  permiso: number = 0;

  categorias: any = [{idcategoria: '', nombrecategoria: ''}];

  categoriaSeleccionada: number = 0;

  constructor(private router: Router,  private bd: DbserviceService, private cateUpdate: CateupdateService, private permisos: PermisosService, private sesion: CorreoService ) {}
  

  //funciones de redirección

  //home
  irHome(){
    this.router.navigate([''])    
  }

  //Miscelanio
  irIni(){
    this.router.navigate(['/ini-sesion']);
  }
  irRegistro(){
    this.router.navigate(['/registrarse']);
  }
  irContactanos(){
    this.router.navigate(['/contactanos']);
  }

  irPerfil(){
    this.router.navigate(['/perfil']);
  }
  irCarrito(){
    this.router.navigate(['/carrito']);
  }
  irContactanosCli(){
    this.router.navigate(['/contactanos-cli']);
  }

  cerrarSesion(){
    this.permisos.setUserRole(0);
    this.sesion.clearCorreoSesion();
    this.sesion.setCorreoSesion("");
    this.router.navigate(['']);
  }

  irRoles(){
    this.router.navigate(['/editar-rol']);
  }
  irConsultas(){
    this.router.navigate(['/consultas']);
  }
  irPedidos(){
    this.router.navigate(['/listado-pedido']);
  }

  //categorias
  irCategorias(idcate: number){

    this.cateUpdate.setCategoriaSeleccionada(idcate);
    this.router.navigate(['/categorias']);
  }


  irProdCli(){
    this.router.navigate(['/herramientas-p-cli']);
  }

  irProdAdm(){
    this.router.navigate(['/herramientas-p-adm']);
  }

  irAgregar(){
    this.router.navigate(['/agregar-prod']);
  }

  ngOnInit() {
    this.variableStorage = localStorage.getItem('token');
    
    this.bd.dbState().subscribe(res => {
      if(res){
        this.bd.fetchCategoria().subscribe(items => {
          this.categorias = items;
        })
      }
    })

    this.permisos.Rol.subscribe((rol) => {
      this.permiso = rol;
    });

    this.cateUpdate.fetchCategoriaSeleccionada().subscribe((idCategoria) => {
      this.categoriaSeleccionada = idCategoria;
      console.log('Categoria seleccionada:', this.categoriaSeleccionada); 
    });
  }

}
