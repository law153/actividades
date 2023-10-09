import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { CamaraService } from 'src/app/services/camara.service';
import { DbserviceService } from 'src/app/services/dbservice.service';


@Component({
  selector: 'app-editar-prod',
  templateUrl: './editar-prod.page.html',
  styleUrls: ['./editar-prod.page.scss'],
})
export class EditarProdPage implements OnInit {

  msjNombre: string = "";
  msjDesc: string = "";
  msjPrecio: string = "";
  msjStock: string = "";
  msjMedida: string = "";
  msjCate: string = "";

  id: number = 0;
  nombre: string = "";
  desc: string = "";
  precio: string="";
  stock: number=0;
  medida: string = "";
  categoria: number= 0;
  foto: string | undefined;
  flag: boolean= true;
  msj: string="";

  codprod: number = 0;
  producto: any = [{codprod:'', nombreprod:'', descripcion: '', precio:'', stock: '', foto:'', unidadmedida: '', categoriap: ''}];
  
  constructor(private router: Router, private alerta: AlertController, private activeRouter: ActivatedRoute, private menuCtrl: MenuController, private bd: DbserviceService, private camara: CamaraService) {
   }

  abrirSuperior(){
    this.menuCtrl.enable(true, 'superior');
    this.menuCtrl.open('superior');
  }

  abrirCategorias(){
    this.menuCtrl.enable(true, 'categorias');
    this.menuCtrl.open('categorias');
  }

  irHomeAdm(){
    this.router.navigate(['home-adm'])    
  }

  //Validaciones

  envioValido(){
    this.flag = true;
    this.nombreValido();
    this.descValida();
    this.precioValido();
    this.stockValido();
    this.medidaValido();
    this.categoriaValido();
    if(this.flag === true){
      this.editarProd(); 
      this.bd.presentAlert("Producto editado con exito");
      this.irHomeAdm();
    } 
  }


  nombreValido(){
    this.msjNombre = "";

      if(this.nombre.length === 0){
        this.flag = false;
        this.msjNombre="Debe llenar este campo";
      } else{

        if(!this.primerCaracterEsMayus(this.nombre) ){
          this.flag = false;
          this.msjNombre+="La primera letra del nombre debe ser\n mayuscula"+"\n";

        }
        if(this.nombre.length <= 9){
          this.flag = false;
          this.msjNombre+="La longitud del nombre debe ser \nmayor a 10 caracteres"+"\n";
        }
      }
  }

  descValida(){
    this.msjDesc = "";

      if(this.desc.length === 0){
        this.flag = false;
        this.msjDesc="Debe llenar este campo";
      } else{
        if(!this.primerCaracterEsMayus(this.desc) ){
          this.flag = false;
          this.msjDesc+="La primera letra de la descripción debe ser\n mayuscula"+"\n";
        } else if(this.desc.length <= 9){
          this.flag = false;
          this.msjDesc+="La longitud de la descripción debe ser \nmayor a 10 caracteres"+"\n";
        }
      }
  }

  precioValido(){
    this.msjPrecio = "";

      if(this.precio.length === 0){
        this.flag = false;
        this.msjPrecio="Debe llenar este campo";
      }else{
        if(!this.SoloNumeros(this.precio)){
          this.flag = false;
          this.msjPrecio+="El precio debe estar compuesto solo de números"+"\n";
        } else if(parseInt(this.precio) <= 0){
          this.flag = false;
          this.msjPrecio+="El precio no puede ser igual o menor a 0"+"\n";
        }
      }
  }

  stockValido(){
    this.msjStock = "";

      if(String(this.stock).length === 0){
        this.flag = false;
        this.msjStock="Debe llenar este campo";
      } else{
        if(this.stock <= 0){
          this.flag = false;
          this.msjStock+="El stock no puede ser igual o menor a 0"+"\n";
        }
      }
  }

  medidaValido(){
    this.msjMedida = "";

    if(this.medida.length === 0){
      this.flag = false;
      this.msjMedida+="Debe seleccionar una unidad de medida"+"\n";
    }
      
  }

  categoriaValido(){
    this.msjCate = "";

    if(this.categoria === 0){
      this.flag = false;
      this.msjCate+="Debe seleccionar una categoría"+"\n";
    }
  }

  async capturarImagen(){
    this.foto = await this.camara.takePicture();
  }



  //Funciones de validación
  primerCaracterEsMayus(texto: string): boolean {
    const primerCaracter = texto.charAt(0);
    return /[A-Z]/.test(primerCaracter);
  }

  SoloNumeros(cadena: string): boolean {
    return /^[0-9]+$/.test(cadena);
  }

  async presentAlert(mensaje: string) {
    const alert = await this.alerta.create({
      header: 'Alerta',
      subHeader: 'Mensaje importante',
      message: mensaje,
      buttons: ['Vale'],
    });

    await alert.present();
  }

  editarProd(){
    this.bd.modificarProducto(this.id, this.nombre, this.desc, parseInt(this.precio), this.stock, this.foto, this.medida, this.categoria);
  }

  ngOnInit() {
    this.activeRouter.queryParams.subscribe(param => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.codprod = this.router.getCurrentNavigation()?.extras?.state?.["prodEnviar"];
        console.log("Código de producto recibido:", this.codprod);
        
        this.bd.dbState().subscribe(res => {
          if(res){
            console.log("Codprod: "+this.codprod);
            this.bd.buscarProducto(this.codprod);
            
            this.bd.fetchProducto().subscribe(items => {
              this.producto = items[0];
              console.log("Codprod del arreglo: "+this.producto.codprod);
              this.id = this.producto.codprod;
              this.nombre= this.producto.nombreprod;
              this.desc = this.producto.descripcion;
              this.precio = this.producto.precio;
              this.stock = this.producto.stock;
              this.medida = this.producto.unidadmedida;
              this.categoria = this.producto.categoriap;
              this.foto = this.producto.foto;
            })
            
          }
        })
      }
    });

    
  }

}
