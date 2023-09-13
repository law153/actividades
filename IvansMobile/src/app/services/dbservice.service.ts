
import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Rol } from './rol';
@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  //Conexion a base de datos
  public database!: SQLiteObject;

  //Variables de creación de tablas
  categoria: string = "CREATE TABLE IF NOT EXISTS categoria(id_categoria INTEGER PRIMARY KEY, nombre_categoria TEXT NOT NULL);";
  rol: string = "CREATE TABLE IF NOT EXISTS rol(id_rol INTEGER PRIMARY KEY, nombre_rol TEXT NOT NULL);";
  pregunta: string = "CREATE TABLE IF NOT EXISTS pregunta(id_pregunta INTEGER PRIMARY KEY, nombre_pregunta TEXT NOT NULL);";
  consulta: string = "CREATE TABLE IF NOT EXISTS consulta(id_consulta INTEGER PRIMARY KEY, nombre_consultante TEXT NOT NULL, asunto_consulta TEXT NOT NULL, mensaje_consulta TEXT NOT NULL);";
  usuario: string = "CREATE TABLE IF NOT EXISTS usuario(id_usuario INTEGER PRIMARY KEY AUTOINCREMENT, rut INTEGER NOT NULL, dvrut CHAR(1) NOT NULL, nombre TEXT NOT NULL, apellido TEXT NOT NULL, telefono INTEGER NOT NULL, correo TEXT NOT NULL, clave TEXT NOT NULL, direccion TEXT NOT NULL, respuesta TEXT NOT NULL, rolU INTEGER NOT NULL, preguntaU INTEGER NOT NULL, FOREIGN KEY (rolU) REFERENCES rol(id_rol), FOREIGN KEY (preguntaU) REFERENCES pregunta(id_pregunta));";
  producto: string = "CREATE TABLE IF NOT EXISTS producto(cod_prod INTEGER PRIMARY KEY AUTOINCREMENT, nombre_prod TEXT NOT NULL, descripcion TEXT NOT NULL, precio INTEGER NOT NULL, stock INTEGER NOT NULL, foto BLOB NOT NULL, unidad_medida TEXT NOT NULL, categoriaP INTEGER NOT NULL, FOREIGN KEY (categoriaP) REFERENCES categoria(id_categoria));";
  venta: string = "CREATE TABLE IF NOT EXISTS venta(id_venta INTEGER PRIMARY KEY AUTOINCREMENT, fecha_venta DATE NOT NULL, estado TEXT NOT NULL, fecha_entrega DATE NOT NULL, total INTEGER NOT NULL, carrito CHAR(1), usuarioV INTEGER NOT NULL, FOREIGN KEY (usuarioV) REFERENCES usuario(id_usuario) );";
  detalle: string= "CREATE TABLE IF NOT EXISTS detalle(id_detalle INTEGER PRIMARY KEY AUTOINCREMENT, cantidad INTEGER NOT NULL, subtotal INTEGER NOT NULL, ventaD INTEGER NOT NULL, productoD INTEGER NOT NULL, FOREIGN KEY (ventaD) REFERENCES venta(id_venta), FOREIGN KEY (productoD) REFERENCES producto(cod_prod) );";

  //Variables para insert iniciales
  rolCliente: string = "INSERT OR IGNORE INTO rol(id_rol, nombre_rol) VALUES (1, 'Cliente');";

  //Observables de tablas 
  listaRol = new BehaviorSubject([]);


  //Observable estatus o de bandera
  private flag: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(public base: SQLite, private plataforma: Platform, private alertController: AlertController) {
    this.crearDB();
  }

  //Ver el estado de la DB
  dbState(){
    return this.flag.asObservable();
  }

  //Funciones para Selects
  fetchRol(): Observable<Rol[]>{
    return this.listaRol.asObservable();
  }

  buscarRoles(){
    return this.database.executeSql("SELECT * FROM rol;",[]).then(res =>{
      //todo bien
      let items: Rol[] = [];
      //Validar cantidad registros
      if(res.rows.length > 0){
        //Recorrer los datos
        for(var i = 0; i < res.rows.length; i++ ){
          //Guardando los datos
          items.push({ 
            id_rol_ionic: res.rows.item(i).id_rol,
            nombre_rol_ionic: res.rows.item(i).nombre_rol });
        }
      }
      this.listaRol.next(items as any);

    })
  }
  

  crearDB(){
    //Plataforma lista
    this.plataforma.ready().then(()=>{
      //Crear DB
      this.base.create({name: 'ivans.db', location: 'default'
    }).then((db: SQLiteObject)=>{
      this.database = db;
    }).catch(e=>{
      this.presentAlert("Error al crear la base de datos");
    })
      

    })
  }

  async crearTablas(){
    try{
      //Crear las tablas
      await this.database.executeSql(this.rol,[]);

      //Registros iniciales
      await this.database.executeSql(this.rolCliente,[]);
      //Actualizar el observable bandera
      this.flag.next(true);
      //Llamar los select
      this.buscarRoles();

    }catch{
      this.presentAlert("Error al crear la base de datos");
    }
  }




  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }


}