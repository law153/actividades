import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-ver-compra',
  templateUrl: './ver-compra.page.html',
  styleUrls: ['./ver-compra.page.scss'],
})
export class VerCompraPage implements OnInit {

  idventa: number = 0;
  idusuario: number = 0;
  usuario: any = {idusuario: '', rut: '', dvrut: '', nombre: '', apellido: '', telefono: '', correo: '', clave: '', direccion: '', fotousuario: '', respuesta: '', rolu: '', preguntau: '' };
  compra: any = {};
  detalles: any = [{iddetallec: '', nombreprodc: '', fotoprodc: '', cantidadc: '', subtotalc: '', ventac: ''}];
  constructor(private menuCtrl: MenuController, private router: Router, private activeRouter: ActivatedRoute, private bd: DbserviceService) { 

    this.activeRouter.queryParams.subscribe(param => {
      if(this.router.getCurrentNavigation()?.extras.state){
        this.idventa = this.router.getCurrentNavigation()?.extras?.state?.["idEnviar"];
        
      }

      this.bd.dbState().subscribe(async res => {
        if (res) {

            await this.buscarVenta();
            await this.buscarDetallesCompra();
         

        }
      })
    }) 

  }

  async buscarVenta(){
    try{
      const venta = await this.bd.buscarVenta2(this.idventa);

      this.compra = venta[0];
      

    }catch(error){

      console.error("Error al buscar la compra", error);

    }
  }

  async buscarDetallesCompra(){
    try{
      const detalles = await this.bd.buscarDetallesCompraVenta2(this.idventa);

      this.detalles = detalles;
      

    }catch(error){

      console.error("Error al buscar los detalles", error);

    }
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
    this.router.navigate(['']);
  }

  ngOnInit() {
   
  }

}
