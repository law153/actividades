import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  variableStorage: any = "";
  

  categorias: any = [{idcategoria: '', nombrecategoria: ''}];

  cateid: number = 0;


  constructor(private router: Router,  private bd: DbserviceService ) {}
  

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
    localStorage.setItem('token', "");
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
  irCategorias(){
    //this.cateid = this.categorias.idcategoria;
    let categoria: NavigationExtras = {
      state: {
        categoriaEnviar: this.cateid
      }
    };
    this.router.navigate(['/categorias'], categoria);
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
    /*
    this.bd.dbState().subscribe(res => {
      if(res){
        this.bd.fetchCategoria().subscribe(item => {
          this.categorias = item;
        })
      }
    })
    */
  }

}
