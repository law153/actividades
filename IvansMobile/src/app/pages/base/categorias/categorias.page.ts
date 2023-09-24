import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { CateupdateService } from 'src/app/services/cateupdate.service';
import { PermisosService } from 'src/app/services/permisos.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  idcate: number = 0;
  productos: any = [{codprod: '', nombreprod: '', descripcion: '', precio: '', stock: '', foto: '', unidadmedida: '', categoriap: ''}];
  permiso: number = 0;
  constructor(private menuCtrl: MenuController, private router: Router, private activeRouter: ActivatedRoute, private bd: DbserviceService, private cateUpdate: CateupdateService,  private permisos: PermisosService ) {
    this.cateUpdate.fetchCategoriaSeleccionada().subscribe((idCategoria) => {
      this.idcate = idCategoria;
      this.actualizarProductos();
    });
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
  irProducto(codprod: number){

    let NavigationsExtra: NavigationExtras = {
      state: {
        prodEnviar: codprod
      }
    };
    this.router.navigate(['/productos'], NavigationsExtra); 
  }

  irEditarProducto(codprod: number){

    let NavigationsExtra: NavigationExtras = {
      state: {
        prodEnviar: codprod
      }
    };
    this.router.navigate(['/editar-prod'], NavigationsExtra); 
  }

  actualizarProductos() {
    this.bd.dbState().subscribe(res => {
      if (res) {
        this.bd.buscarProductoCate(this.idcate);
  
        this.bd.fetchProducto().subscribe(items => {
          this.productos = items;
        })
      }
    })
  }

  irCategorias(idcate: number) {
    this.cateUpdate.setCategoriaSeleccionada(idcate);
  }

  ngOnInit() {


    this.bd.dbState().subscribe(res => {
      if(res){
        this.bd.buscarProductoCate(this.idcate);
        
        this.bd.fetchProducto().subscribe(items => {
          this.productos = items;
        })
      }
    })

    this.permisos.Rol.subscribe((rol) => {
      this.permiso = rol;
    });

  }

}
