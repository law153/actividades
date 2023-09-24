import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { PermisosService } from 'src/app/services/permisos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  codprod: number = 0;
  producto: any = {};
  permiso: number = 0;
  idusuario: number = 200;
  venta: any = {};
  fechaActual = new Date();
  diasSumar = 999;
  fechaEntrega = new Date(this.fechaActual);
  
  constructor(private menuCtrl: MenuController, private router: Router, private activeRouter: ActivatedRoute, private bd: DbserviceService,  private permisos: PermisosService) {
    this.activeRouter.queryParams.subscribe(param => {
      if(this.router.getCurrentNavigation()?.extras.state){
        this.codprod = this.router.getCurrentNavigation()?.extras?.state?.["prodEnviar"];
      }
      }) 
   }


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

  irIni(){
    this.router.navigate(['ini-sesion']);
  }

  comprar(){
    this.bd.dbState().subscribe(res => {
      if (res) {
        this.bd.buscarVentaCarrito(this.idusuario, 'Activo');
    
        this.bd.fetchVenta().subscribe(items => {
          if (items.length > 0) {
            
            this.venta = items[0];

            
          } else {
            // No se encontraron un carrito activo
            this.fechaEntrega.setDate(this.fechaActual.getDate() + this.diasSumar);
            this.venta = this.bd.agregarVenta(this.fechaActual, 'Activo', '11/11/2030', this.producto.precio, 'C', this.idusuario);
            
          }
        })
      }
    })
    this.router.navigate(['carrito']);
  }

  ngOnInit() {

    this.bd.dbState().subscribe(res => {
      if(res){
        this.bd.buscarProducto(this.codprod);
        
        this.bd.fetchProducto().subscribe(items => {
          this.producto = items[0];
        })
      }
    })

    this.permisos.Rol.subscribe((rol) => {
      this.permiso = rol;
    });
  }

}
