import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, ToastController } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-agregar-prod',
  templateUrl: './agregar-prod.page.html',
  styleUrls: ['./agregar-prod.page.scss'],
})
export class AgregarProdPage implements OnInit {
  msjNombre: string = "";
  msjDesc: string = "";
  msjPrecio: string = "";
  msjStock: string = "";
  msjMedida: string = "";
  msjCate: string = "";

  nombre: string = "";
  desc: string = "";
  precio: string="";
  stock: number=1;
  foto: string= "";
  medida: string = "";
  categoria: string= "";
  flag: boolean= true;
  msj: string="";

  //Variable para tomar foto
  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    //var imageUrl = image.webPath;
  
    // Can be set to the src of an image now
    this.foto = image.dataUrl!;
  };

  //Variable para bd
  productos: any = [{nombreProd: '', descripcion: '', precio: '', stock: '', foto: '', unidadMedida: '', categoriaP: ''}];

  constructor(private router: Router, private alerta: AlertController, private tostada: ToastController, private menuCtrl: MenuController, private bd: DbserviceService) { }

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
    this.nombreValido();
    this.descValida();
    this.precioValido();
    this.stockValido();
    this.medidaValido();
    this.categoriaValido();
    if(this.flag === true){
      //this.agregar();
      this.msj="Producto agregado correctamente";
      this.presentAlert(this.msj);
      this.irHomeAdm();
    } 
  }


  nombreValido(){
    this.msjNombre = "";

      if(this.nombre.length === 0){
        this.flag = false;
        this.msjNombre="Debe llenar este campo";
      } else{

        if(this.primerCaracterEsMayus(this.nombre) ){
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
        if(this.primerCaracterEsMayus(this.desc) ){
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
        if(this.SoloNumeros(this.precio)){
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

    if(this.medida.length === 0){
      this.flag = false;
      this.msjCate+="Debe seleccionar una categoría"+"\n";
    }
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

  ngOnInit() {

  }

  agregar() {
    this.bd.agregarProducto(this.nombre, this.desc, this.precio, this.stock, this.foto, this.medida, this.categoria);
    this.router.navigate(['home-adm']);
  }

}
