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
  producto: any = [{codprod:'', nombreprod:'', descripcion: '', precio:'', stock: '', foto:'', unidadmedida: '', categoriap: ''}];
  permiso: number = 0;
  idusuario: number = 200;
  venta: any = [{idventa:'', fechaventa: '', estado: '', fechaentrega:'', total:'', carrito: '', usuariov: ''}];
  fechaActual = new Date();
  diasSumar = 999;
  fechaEntrega = new Date(this.fechaActual);
  detalle: any = [{iddetalle: '', cantidad: '', subtotal: '', ventad: '', productod: ''}];
  
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
            this.bd.buscarDetalleProd(this.producto.codprod, this.venta.idventa);
            this.bd.fetchDetalle().subscribe(details => {
              if (details.length > 0) {
                this.detalle = details[0];
                this.bd.modificarDetalle(this.venta.idventa, this.detalle.subtotal+this.producto.precio, this.detalle.cantidad+1);
                console.log("-------------------------------------");
                console.log("  Se esta modificando el detalle ya previamente existente");
                console.log("-------------------------------------");
                
              } else{
                this.bd.agregarDetalle(1, this.producto.precio, this.venta.idventa, this.producto.codprod);
                console.log("-------------------------------------");
                console.log("Se esta agregando un nuevo detalle");
                console.log("-------------------------------------");
              }

            })
            
          } else {
            // No se encontraron un carrito activo
            this.fechaEntrega.setDate(this.fechaActual.getDate() + this.diasSumar);
            this.venta = this.bd.agregarVenta(this.fechaActual, 'Activo', '11/11/2030', this.producto.precio, 'C', this.idusuario);
            this.bd.agregarDetalle(1, this.producto.precio, this.venta.idventa, this.producto.codprod);
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
