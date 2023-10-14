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
  permisoStorage: any = 0;
  permiso: any = 0;
  correoUser: any = "";
  usuario: any = {idusuario: '', rut: '', dvrut: '', nombre: '', apellido: '', telefono: '', correo: '', clave: '', direccion: '', fotousuario: '', respuesta: '', rolu: '', preguntau: '' };
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
      this.router.navigate(['carrito']);
    });
  }


  async comprar2() {

    await this.comprar();
    this.redireccion();
    
  }
  
  async comprar() {
    this.bd.buscarVentaCarrito(this.usuario.idusuario, 'Activo').subscribe(async ventas => {
      if (ventas.length === 1) {
        this.venta = ventas[0];
  
        this.bd.buscarDetalleProd(this.producto.codprod, this.venta.idventa).subscribe(detalles => {
          if (detalles.length === 1) {
            this.detalle = detalles[0];
            console.log("ID DEL DETALLE ENCONTRADO: " + this.detalle.iddetalle);
            this.bd.modificarDetalle(this.detalle.iddetalle, this.detalle.subtotal + this.producto.precio, this.detalle.cantidad + 1);
            this.bd.modificarTotal(this.venta.idventa, this.venta.total + this.producto.precio);
            console.log("-------------------------------------");
            console.log("  Se está modificando el detalle ya previamente existente");
            console.log("-------------------------------------");
            console.log("Se usó el del detalle que ya existe aaaaaaaaaaaaaaa");
          } else {
            this.detalle = this.bd.agregarDetalle(1, this.producto.precio, this.venta.idventa, this.producto.codprod);
            this.bd.modificarTotal(this.venta.idventa, this.venta.total + this.producto.precio);
            console.log("ID DEL DETALLE CREADO: " + this.detalle.iddetalle);
            console.log("-------------------------------------");
            console.log("Se está agregando un nuevo detalle");
            console.log("-------------------------------------");
          }
        });

      } else {
        this.fechaEntrega.setDate(this.fechaActual.getDate() + this.diasSumar);

        await this.bd.agregarVenta(this.fechaActual, 'Activo', this.fechaEntrega, this.producto.precio, 'C', this.usuario.idusuario);

        this.bd.fetchVenta().subscribe(venta2 => {
          this.venta = venta2[venta2.length - 1];
          console.log("ID de la venta que se generó: "+this.venta.idventa);
          this.bd.agregarDetalle(1, this.producto.precio, this.venta.idventa, this.producto.codprod);

        })
        
        
        
      }
    });
  }
  

  ngOnInit() {

    this.correoUser = localStorage.getItem('correo');

    this.bd.dbState().subscribe(res => {
      if(res){

        this.bd.buscarProducto(this.codprod);
        
        this.bd.fetchProducto().subscribe(items => {
          this.producto = items[0];
        })
        if(this.correoUser !== ""){
          this.bd.buscarPorCorreo(this.correoUser).subscribe(items => {
            this.usuario = items[0];
          });
        }
        
      }
    })

    this.permisos.Rol.subscribe((rol) => {
      this.permiso = rol;
    });
  }

}
