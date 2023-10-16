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
  detalles: any = [{iddetalle: '', cantidad: '', subtotal: '', ventad: '', productod: '', nombreprod: '', precio: '', stock: '', foto: ''}];
  constructor(private menuCtrl: MenuController, private router: Router, private activeRouter: ActivatedRoute, private bd: DbserviceService) { 

    this.activeRouter.queryParams.subscribe(param => {
      if(this.router.getCurrentNavigation()?.extras.state){
        this.idventa = this.router.getCurrentNavigation()?.extras?.state?.["idEnviar"];
        console.log("ID de venta que llegó a ver-compra: "+this.idventa);
      }

    
      this.bd.dbState().subscribe(res => {
        if (res) {

            
          this.bd.buscarVenta(this.idventa);
          this.bd.fetchVenta().subscribe(items => {

            this.compra = items[0];

            this.bd.buscarDetallesVenta(this.compra.idventa).subscribe(detalles => {
              this.detalles = detalles;
            });

          });

        }
      })
    }) 

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
