
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
  categoria: string = "CREATE TABLE IF NOT EXISTS categoria(idCategoria INTEGER PRIMARY KEY, nombreCategoria TEXT NOT NULL);";
  rol: string = "CREATE TABLE IF NOT EXISTS rol(idRol INTEGER PRIMARY KEY, nombreRol TEXT NOT NULL);";
  pregunta: string = "CREATE TABLE IF NOT EXISTS pregunta(idPregunta INTEGER PRIMARY KEY, nombrePregunta TEXT NOT NULL);";
  consulta: string = "CREATE TABLE IF NOT EXISTS consulta(idConsulta INTEGER PRIMARY KEY AUTOINCREMENT, nombreConsultante TEXT NOT NULL, asuntoConsulta TEXT NOT NULL, mensajeConsulta TEXT NOT NULL);";
  usuario: string = "CREATE TABLE IF NOT EXISTS usuario(idUsuario INTEGER PRIMARY KEY AUTOINCREMENT, rut INTEGER NOT NULL, dvrut CHAR(1) NOT NULL, nombre TEXT NOT NULL, apellido TEXT NOT NULL, telefono INTEGER NOT NULL, correo TEXT NOT NULL, clave TEXT NOT NULL, direccion TEXT NOT NULL, fotoUsuario BLOB NOT NULL ,respuesta TEXT NOT NULL, rolU INTEGER NOT NULL, preguntaU INTEGER NOT NULL, FOREIGN KEY (rolU) REFERENCES rol(idRol), FOREIGN KEY (preguntaU) REFERENCES pregunta(idPregunta));";
  producto: string = "CREATE TABLE IF NOT EXISTS producto(codProd INTEGER PRIMARY KEY AUTOINCREMENT, nombreProd TEXT NOT NULL, descripcion TEXT NOT NULL, precio INTEGER NOT NULL, stock INTEGER NOT NULL, foto BLOB NOT NULL, unidadMedida TEXT NOT NULL, categoriaP INTEGER NOT NULL, FOREIGN KEY (categoriaP) REFERENCES categoria(idCategoria));";
  venta: string = "CREATE TABLE IF NOT EXISTS venta(idVenta INTEGER PRIMARY KEY AUTOINCREMENT, fechaVenta DATE NOT NULL, estado TEXT NOT NULL, fechaEntrega DATE NOT NULL, total INTEGER NOT NULL, carrito CHAR(1), usuarioV INTEGER NOT NULL, FOREIGN KEY (usuarioV) REFERENCES usuario(idUsuario) );";
  detalle: string= "CREATE TABLE IF NOT EXISTS detalle(idDetalle INTEGER PRIMARY KEY AUTOINCREMENT, cantidad INTEGER NOT NULL, subtotal INTEGER NOT NULL, ventaD INTEGER NOT NULL, productoD INTEGER NOT NULL, FOREIGN KEY (ventaD) REFERENCES venta(idVenta), FOREIGN KEY (productoD) REFERENCES producto(codProd) );";
  detalleComprado: string ="CREATE TABLE IF NOT EXISTS detalleComprado(idDetalleC INTEGER PRIMARY KEY AUTOINCREMENT, nombreProdC TEXT NOT NULL, fotoProdC BLOB NOT NULL, cantidadC INTEGER NOT NULL, subtotalC INTEGER NOT NULL, ventaC INTEGER NOT NULL, FOREIGN KEY (ventaC) REFERENCES venta(idVenta) );";

  //Variables para insert iniciales

  //Categorias
  categoriaHerramientas: string = "INSERT OR IGNORE INTO categoria(idCategoria, nombreCategoria) VALUES (1, 'herramientas');";
  categoriaElectricidad: string = "INSERT OR IGNORE INTO categoria(idCategoria, nombreCategoria) VALUES (2, 'electricidad');";
  categoriaFijaciones: string = "INSERT OR IGNORE INTO categoria(idCategoria, nombreCategoria) VALUES (3, 'fijaciones');";
  categoriaSeguridad: string = "INSERT OR IGNORE INTO categoria(idCategoria, nombreCategoria) VALUES (4, 'seguridad');";
  categoriaRopa: string = "INSERT OR IGNORE INTO categoria(idCategoria, nombreCategoria) VALUES (5, 'ropa');";
  categoriaGasfiteria: string = "INSERT OR IGNORE INTO categoria(idCategoria, nombreCategoria) VALUES (6, 'gasfiteria');";
  categoriaKits: string = "INSERT OR IGNORE INTO categoria(idCategoria, nombreCategoria) VALUES (7, 'kits');";
  //Roles
  rolCliente: string = "INSERT OR IGNORE INTO rol(id_rol, nombre_rol) VALUES (1, 'cliente');";
  rolAdmin: string = "INSERT OR IGNORE INTO rol(id_rol, nombre_rol) VALUES (2, 'admin');";
  //preguntas
  preguntaMascota: string = "INSERT OR IGNORE INTO pregunta(idPregunta, nombrePregunta) VALUES (1, '¿Cual es el nombre de tu primera mascota?'); ";
  preguntaCiudad: string = "INSERT OR IGNORE INTO pregunta(idPregunta, nombrePregunta) VALUES (2, '¿Cual es tu ciudad natal?'); ";
  preguntaColor: string = "INSERT OR IGNORE INTO pregunta(idPregunta, nombrePregunta) VALUES (3, '¿Cual es tu color favorito?'); ";
  //Consultas
  consultaDefault: string = "INSERT OR IGNORE INTO consulta(idConsulta, nombreConsultante, mensajeConsulta) VALUES (200, 'Alvaro', 'Faltan guitarras');";
  //Usuarios
  usuarioClienteDefault: string = "INSERT OR IGNORE INTO usuario(idUsuario, rut, dvrut, nombre, apellido, telefono, correo, clave, direccion, fotoUsuario, respuesta, rolU, preguntaU) VALUES ('200', 11111111, '1', 'Javier', 'Maldonado', '12345678', 'javicci@gmail.com', 'umigod', 'Camarones 1313', '/assets/imagen.jpg', 'Umi', 1, 1);";
  usuarioAdminDefault: string = "INSERT OR IGNORE INTO usuario(idUsuario, rut, dvrut, nombre, apellido, telefono, correo, clave, direccion, fotoUsuario, respuesta, rolU, preguntaU) VALUES ('201', 22222222, '2', 'Ivan', 'Fuentes', '87654321', 'ivanfuentes@gmail.com', 'ivans', 'Piedra Roja 11', '/assets/imagen.jpg', 'Negro', 2, 3);";
  


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
            idRol: res.rows.item(i).id_rol,
            nombre_rol_ionic: res.rows.item(i).nombre_rol });
        }
      }
      this.listaRol.next(items as any);

    })
  }

  eliminar(id:any){
    return this.database.executeSql("DELETE FROM rol WHERE id_rol= ?",[id]).then(res=>{
      this.buscarRoles();

    })
  }

  agregar(nombre: any){
    return this.database.executeSql("INSERT INTO rol(nombre_rol) VALUES(?)",[nombre]).then(res=> {
      this.buscarRoles(); 
    })
  }

  modificar(id: any, nombre: any){
    return this.database.executeSql("UPDATE rol SET nombre_rol = ? WHERE id_rol = ?",[nombre, id]).then(res =>{
      this.buscarRoles();
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