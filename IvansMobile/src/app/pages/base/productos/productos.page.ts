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
  hayProd: boolean = true;
  codprod: number = 0;
  producto: any = [{codprod:'', nombreprod:'', descripcion: '', precio:'', stock: '', foto:'', unidadmedida: '', categoriap: ''}];
  permisoStorage: any = 0;
  permiso: any = 0;
  idUser: any = 0;
  venta: any = [{idventa:'', fechaventa: '', estado: '', fechaentrega:'', total:'', carrito: '', usuariov: ''}];
  fechaActual = new Date();
  diasSumar = 999;
  fechaEntrega = new Date(this.fechaActual);
  detalle: any = [{iddetalle: '', cantidad: '', subtotal: '', ventad: '', productod: ''}];
  detalles: any = [{iddetalle: '', cantidad: '', subtotal: '', ventad: '', productod: '', nombreprod: '', precio: '', stock: '', foto: ''}];
  
  constructor(private menuCtrl: MenuController, private router: Router, private activeRouter: ActivatedRoute, private bd: DbserviceService, private permisos: PermisosService) {
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

  async redireccion(){

    // Actualizar la vista del carrito después de agregar un producto
    this.bd.buscarDetallesVenta(this.venta.idventa).subscribe(detalles => {
      this.detalles = detalles; // Actualiza la lista de detalles
      this.router.navigate(['home-cli']);
    });

    
  }


  async comprar2() {

    await this.buscarCarrito();
    this.redireccion();
    
  }
  

  async buscarCarrito(){
    try{

      const carrito = await this.bd.buscarVentaCarrito2(this.idUser, 'Activo');

      if(carrito.length > 0){
        this.venta = carrito[0];
        
        await this.buscarDetalle();

      }else{
        
        this.fechaEntrega.setDate(this.fechaActual.getDate() + this.diasSumar);
        const nuevaVentaId = await this.bd.agregarVenta(this.fechaActual, 'Activo', this.fechaEntrega, this.producto.precio, 'C', this.idUser);
        this.bd.agregarDetalle(1, this.producto.precio, nuevaVentaId, this.producto.codprod);

      }

    }catch(error){

      console.error("Error al buscar el carrito", error);

    }
  }

  async buscarDetalle(){
    try{

      const detalle = await this.bd.buscarDetalleProd2(this.producto.codprod, this.venta.idventa);

      if(detalle.length > 0){

        this.detalle = detalle[0];
        
        this.bd.modificarDetalle(this.detalle.iddetalle, this.detalle.subtotal + this.producto.precio, this.detalle.cantidad + 1);
        this.bd.modificarTotal(this.venta.idventa, this.venta.total + this.producto.precio);

      }else{

        
        this.bd.agregarDetalle(1, this.producto.precio, this.venta.idventa, this.producto.codprod);
        this.bd.modificarTotal(this.venta.idventa, this.venta.total + this.producto.precio);

      }

    }catch(error){

      console.error("Error al buscar el detalle", error);

    }
  }
  

  ngOnInit() {;

    this.idUser = localStorage.getItem('usuario');

    this.bd.dbState().subscribe(res => {
      if(res){

        this.bd.buscarProducto(this.codprod);
        
        this.bd.fetchProducto().subscribe(items => {
          if(items.length > 0){
            this.producto = items[0];
            this.hayProd = true;
          } else{
            this.hayProd = false;
          }
          
        })  
      }
    })

    this.permisos.Rol.subscribe((rol) => {
      this.permiso = rol;
    });
  }

}
