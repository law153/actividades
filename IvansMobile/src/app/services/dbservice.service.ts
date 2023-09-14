
import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Rol } from './rol';
import { Categoria } from './categoria';
import { Usuario } from './usuario';
import { Producto } from './producto';
import { Detalle } from './detalle';
import { Venta } from './venta';
import { Consulta } from './consulta';
import { Detallecomprado } from './detallecomprado';
import { Pregunta } from './pregunta';
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
  //Productos
  productoDefault: string = "INSERT OR IGNORE INTO producto(codProd, nombreProd, descripcion, precio, stock, foto, unidadMedida, categoriaP) VALUES(200, 'Producto','Hola buenas tardes soy un producto', 2000, 50, '/assets/imagen.jpg', 'Por unidad', 1);";
  //Ventas
  ventaDefult: string ="INSERT OR IGNORE INTO venta(idVenta, fechaVenta, estado, fechaEntrega, total, carrito, usuarioV) VALUES (200, '04/04/2023', 'Activo', '05/05/2023', 6000, 'C', 200);";
  //Detalles
  detalleDefault: string = "INSERT OR IGNORE INTO detalle(idDetalle, cantidad, subtotal, ventaD, productoD) VALUES (200, 3, 6000, 200, 200);";
  //Historial de compras
  detalleCompradoDefault: string  ="INSERT OR IGNORE INTO detalleComprado(idDetalleC, nombreProdC, fotoProdC, cantidadC, subtotalC, ventaC) VALUES (200, 'Producto', '/assets/imagen.jpg', 3, 6000, 200);";


  //Observables de tablas 
  listaRol = new BehaviorSubject([]); //Borrar este luego

  listaUsuario = new BehaviorSubject([]);
  listaProducto = new BehaviorSubject([]);
  listaVenta = new BehaviorSubject([]);
  listaDetalle = new BehaviorSubject([]);
  listaConsulta = new BehaviorSubject([]);
  listaDetalleComprado = new BehaviorSubject([]);
  listaCategoria = new BehaviorSubject([]);
  listaPregunta = new BehaviorSubject([]);
  
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
  fetchRol(): Observable<Rol[]>{  //Borrar luego
    return this.listaRol.asObservable();
  }

  fetchCategoria(): Observable<Categoria[]>{
      return this.listaCategoria.asObservable();
  }

  fetchPregunta(): Observable<Pregunta[]>{
    return this.listaPregunta.asObservable();
  } 

  fetchUsuario(): Observable<Usuario[]>{
    return this.listaUsuario.asObservable();
  }

  fetchProducto(): Observable<Producto[]>{
    return this.listaProducto.asObservable();
  }

  fetchDetalle(): Observable<Detalle[]>{
    return this.listaDetalle.asObservable();
  }

  fetchVenta(): Observable<Venta[]>{
    return this.listaVenta.asObservable();
  }

  fetchConsulta(): Observable<Consulta[]>{
    return this.listaConsulta.asObservable();
  }

  fetchDetalleComprado(): Observable<Detallecomprado[]>{
    return this.listaDetalleComprado.asObservable();
  }

  buscarRoles(){ //Borrar luego
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
            nombreRol: res.rows.item(i).nombre_rol });
        }
      }
      this.listaRol.next(items as any);

    })
  }

  buscarCategorias(){ //Borrar luego
    return this.database.executeSql("SELECT * FROM categoria;",[]).then(res =>{
      //todo bien
      let items: Categoria[] = [];
      //Validar cantidad registros
      if(res.rows.length > 0){
        //Recorrer los datos
        for(var i = 0; i < res.rows.length; i++ ){
          //Guardando los datos
          items.push({ 
            idCategoria: res.rows.item(i).id_categoria,
            nombreCategoria: res.rows.item(i).nombre_categoria });
        }
      }
      this.listaCategoria.next(items as any);

    })
  }

  buscarPregunta(){ //Borrar luego
    return this.database.executeSql("SELECT * FROM pregunta;",[]).then(res =>{
      //todo bien
      let items: Pregunta[] = [];
      //Validar cantidad registros
      if(res.rows.length > 0){
        //Recorrer los datos
        for(var i = 0; i < res.rows.length; i++ ){
          //Guardando los datos
          items.push({ 
            idPregunta: res.rows.item(i).id_pregunta,
            nombrePregunta: res.rows.item(i).nombre_pregunta });
        }
      }
      this.listaPregunta.next(items as any);

    })
  }
  

  buscarConsultas(){ //Borrar luego
    return this.database.executeSql("SELECT * FROM consulta;",[]).then(res =>{
      //todo bien
      let items: Consulta[] = [];
      //Validar cantidad registros
      if(res.rows.length > 0){
        //Recorrer los datos
        for(var i = 0; i < res.rows.length; i++ ){
          //Guardando los datos
          items.push({ 
            idConsulta: res.rows.item(i).id_consulta,
            nombreConsultante: res.rows.item(i).nombre_consultante,
            asuntoConsulta: res.rows.item(i).asunto_consulta,
            mensajeConsulta: res.rows.item(i).mensaje_consulta
           });
        }
      }
      this.listaConsulta.next(items as any);

    })
  }

  buscarUsuarios(){ 
    return this.database.executeSql("SELECT * FROM usuario;",[]).then(res =>{
      //todo bien
      let items: Usuario[] = [];
      //Validar cantidad registros
      if(res.rows.length > 0){
        //Recorrer los datos
        for(var i = 0; i < res.rows.length; i++ ){
          //Guardando los datos
          items.push({ 
            idUsuario: res.rows.item(i).id_usuario,
            rut: res.rows.item(i).rut_user,
            dvrut: res.rows.item(i).dvrut_user,
            nombre: res.rows.item(i).nombre_user,
            apellido: res.rows.item(i).apellido_user,
            telefono: res.rows.item(i).telefono_user,
            correo: res.rows.item(i).correo_user,
            clave: res.rows.item(i).clave_user,
            direccion: res.rows.item(i).direccion_user,
            fotoUsuario: res.rows.item(i).foto_user,
            respuesta: res.rows.item(i).respuesta_user,
            rolU: res.rows.item(i).rol_user,
            preguntaU: res.rows.item(i).pregunta_user,
           });
        }
      }
      this.listaUsuario.next(items as any);

    })
  }

  buscarProductos(){ //Borrar luego
    return this.database.executeSql("SELECT * FROM producto;",[]).then(res =>{
      //todo bien
      let items: Producto[] = [];
      //Validar cantidad registros
      if(res.rows.length > 0){
        //Recorrer los datos
        for(var i = 0; i < res.rows.length; i++ ){
          //Guardando los datos
          items.push({ 
            codProd: res.rows.item(i).id_consulta,
            nombreProd: res.rows.item(i).nombre_producto,
            descripcion: res.rows.item(i).descripcion_producto,
            precio: res.rows.item(i).precio_producto,
            stock: res.rows.item(i).stock_producto,
            foto: res.rows.item(i).foto_producto,
            unidadMedida: res.rows.item(i).medida_producto,
            categoriaP: res.rows.item(i).categoria_producto
           });
        }
      }
      this.listaProducto.next(items as any);

    })
  }


  //Funciones para eliminar
  eliminar(id:any){ //Borrar luego
    return this.database.executeSql("DELETE FROM rol WHERE id_rol= ?",[id]).then(res=>{
      this.buscarRoles();

    })
  }
  //Funciones para agregar
  agregar(nombre: any){  //Borrar luego
    return this.database.executeSql("INSERT INTO rol(nombre_rol) VALUES(?)",[nombre]).then(res=> {
      this.buscarRoles(); 
    })
  }
  //Funciones para modificar
  modificar(id: any, nombre: any){  //Borrar luego
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
      await this.database.executeSql(this.categoria,[]);
      await this.database.executeSql(this.consulta,[]);
      await this.database.executeSql(this.pregunta,[]);
      await this.database.executeSql(this.usuario,[]);
      await this.database.executeSql(this.producto,[]);
      await this.database.executeSql(this.venta,[]);
      await this.database.executeSql(this.detalle,[]);
      await this.database.executeSql(this.detalleComprado,[]);

      //Registros iniciales
      await this.database.executeSql(this.rolCliente,[]);
      await this.database.executeSql(this.rolAdmin,[]);

      await this.database.executeSql(this.categoriaHerramientas,[]);
      await this.database.executeSql(this.categoriaElectricidad,[]);
      await this.database.executeSql(this.categoriaFijaciones,[]);
      await this.database.executeSql(this.categoriaGasfiteria,[]);
      await this.database.executeSql(this.categoriaKits,[]);
      await this.database.executeSql(this.categoriaSeguridad,[]);
      await this.database.executeSql(this.categoriaRopa,[]);

      await this.database.executeSql(this.preguntaCiudad,[]);
      await this.database.executeSql(this.preguntaColor,[]);
      await this.database.executeSql(this.preguntaMascota,[]);

      await this.database.executeSql(this.consultaDefault,[]);

      await this.database.executeSql(this.usuarioClienteDefault,[]);
      await this.database.executeSql(this.usuarioAdminDefault,[]);

      await this.database.executeSql(this.productoDefault,[]);

      await this.database.executeSql(this.ventaDefult,[]);

      await this.database.executeSql(this.detalleDefault,[]);

      await this.database.executeSql(this.detalleCompradoDefault,[]);
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