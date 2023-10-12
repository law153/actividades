import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { CorreoService } from 'src/app/services/correo.service';
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
  correoUser: string = "";
  usuario: any = {idusuario: '', rut: '', dvrut: '', nombre: '', apellido: '', telefono: '', correo: '', clave: '', direccion: '', fotousuario: '', respuesta: '', rolu: '', preguntau: '' };
  venta: any = [{idventa:'', fechaventa: '', estado: '', fechaentrega:'', total:'', carrito: '', usuariov: ''}];
  fechaActual = new Date();
  diasSumar = 999;
  fechaEntrega = new Date(this.fechaActual);
  detalle: any = [{iddetalle: '', cantidad: '', subtotal: '', ventad: '', productod: ''}];
  
  constructor(private menuCtrl: MenuController, private router: Router, private activeRouter: ActivatedRoute, private bd: DbserviceService,  private permisos: PermisosService, private sesion: CorreoService) {
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

  comprar() {

        this.bd.buscarVentaCarrito(this.usuario.idusuario, 'Activo').subscribe(ventas =>{

          if (ventas.length > 0) {
            this.venta = ventas[0];

            this.bd.buscarDetalleProd(this.producto.codprod, this.venta.idventa).subscribe(detalles => {

              if (detalles.length === 1) {
                
                this.detalle = detalles[0];
                console.log("ID DEL DETALLE ENCONTRADO: "+this.detalle.iddetalle);
                this.bd.modificarDetalle(this.detalle.iddetalle,this.detalle.subtotal + this.producto.precio,this.detalle.cantidad + 1);
                this.bd.modificarTotal(this.venta.id, this.venta.total + this.producto.precio);
                console.log("-------------------------------------");
                console.log("  Se está modificando el detalle ya previamente existente");
                console.log("-------------------------------------");
                console.log("Se usó el del detalle que ya existe aaaaaaaaaaaaaaa")
                this.router.navigate(['carrito']);
              
              } else {
                this.detalle = this.bd.agregarDetalle(1, this.producto.precio, this.venta.idventa, this.producto.codprod);
                this.bd.modificarTotal(this.venta.id, this.venta.total + this.producto.precio);
                console.log("ID DEL DETALLE CREADO: "+this.detalle.iddetalle);
                console.log("-------------------------------------");
                console.log("Se está agregando un nuevo detalle");
                console.log("-------------------------------------");
                this.router.navigate(['carrito']);
              } 

            });
            
          } else {

            this.fechaEntrega.setDate(this.fechaActual.getDate() + this.diasSumar);
            this.venta = this.bd.agregarVenta(this.fechaActual,'Activo','11/11/2030',this.producto.precio,'C',this.usuario.idusuario);
            this.bd.agregarDetalle(1, this.producto.precio, this.venta.idventa, this.producto.codprod);
            this.router.navigate(['carrito']);
          }


        });
    
  }
  

  ngOnInit() {

    this.sesion.fetchCorreoSesion().subscribe((correo) => {
      this.correoUser = correo;
      console.log("Correo recibido: " + correo);
      console.log("Correo almacenado: " + this.correoUser);
    });

    
    
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
