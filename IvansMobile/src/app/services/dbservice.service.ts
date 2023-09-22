
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
  categoria: string = "CREATE TABLE IF NOT EXISTS categoria(idcategoria INTEGER PRIMARY KEY, nombrecategoria TEXT NOT NULL);";
  rol: string = "CREATE TABLE IF NOT EXISTS rol(idrol INTEGER PRIMARY KEY, nombrerol TEXT NOT NULL);";
  pregunta: string = "CREATE TABLE IF NOT EXISTS pregunta(idpregunta INTEGER PRIMARY KEY, nombrepregunta TEXT NOT NULL);";
  consulta: string = "CREATE TABLE IF NOT EXISTS consulta(idconsulta INTEGER PRIMARY KEY AUTOINCREMENT, nombreconsultante TEXT NOT NULL, asuntoconsulta TEXT NOT NULL, mensajeconsulta TEXT NOT NULL);";
  usuario: string = "CREATE TABLE IF NOT EXISTS usuario(idusuario INTEGER PRIMARY KEY AUTOINCREMENT, rut INTEGER NOT NULL, dvrut CHAR(1) NOT NULL, nombre TEXT NOT NULL, apellido TEXT NOT NULL, telefono INTEGER NOT NULL, correo TEXT NOT NULL, clave TEXT NOT NULL, direccion TEXT NOT NULL, fotousuario BLOB NOT NULL ,respuesta TEXT NOT NULL, rolu INTEGER NOT NULL, preguntau INTEGER NOT NULL, FOREIGN KEY (rolu) REFERENCES rol(idrol), FOREIGN KEY (preguntau) REFERENCES pregunta(idpregunta));";
  producto: string = "CREATE TABLE IF NOT EXISTS producto(codprod INTEGER PRIMARY KEY AUTOINCREMENT, nombreprod TEXT NOT NULL, descripcion TEXT NOT NULL, precio INTEGER NOT NULL, stock INTEGER NOT NULL, foto BLOB NOT NULL, unidadmedida TEXT NOT NULL, categoriap INTEGER NOT NULL, FOREIGN KEY (categoriap) REFERENCES categoria(idcategoria));";
  venta: string = "CREATE TABLE IF NOT EXISTS venta(idventa INTEGER PRIMARY KEY AUTOINCREMENT, fechaventa DATE NOT NULL, estado TEXT NOT NULL, fechaentrega DATE NOT NULL, total INTEGER NOT NULL, carrito CHAR(1), usuariov INTEGER NOT NULL, FOREIGN KEY (usuariov) REFERENCES usuario(idusuario) );";
  detalle: string= "CREATE TABLE IF NOT EXISTS detalle(iddetalle INTEGER PRIMARY KEY AUTOINCREMENT, cantidad INTEGER NOT NULL, subtotal INTEGER NOT NULL, ventad INTEGER NOT NULL, productod INTEGER NOT NULL, FOREIGN KEY (ventad) REFERENCES venta(idventa), FOREIGN KEY (productod) REFERENCES producto(codprod) );";
  detalleComprado: string ="CREATE TABLE IF NOT EXISTS detallecomprado(iddetallec INTEGER PRIMARY KEY AUTOINCREMENT, nombreprodc TEXT NOT NULL, fotoprodc BLOB NOT NULL, cantidadc INTEGER NOT NULL, subtotalc INTEGER NOT NULL, ventac INTEGER NOT NULL, FOREIGN KEY (ventac) REFERENCES venta(idventa) );";

  //Variables para insert iniciales

  //Categorias
  categoriaHerramientas: string = "INSERT OR IGNORE INTO categoria(idcategoria, nombrecategoria) VALUES (1, 'herramientas');";
  categoriaElectricidad: string = "INSERT OR IGNORE INTO categoria(idcategoria, nombrecategoria) VALUES (2, 'electricidad');";
  categoriaFijaciones: string = "INSERT OR IGNORE INTO categoria(idcategoria, nombrecategoria) VALUES (3, 'fijaciones');";
  categoriaSeguridad: string = "INSERT OR IGNORE INTO categoria(idcategoria, nombrecategoria) VALUES (4, 'seguridad');";
  categoriaRopa: string = "INSERT OR IGNORE INTO categoria(idcategoria, nombrecategoria) VALUES (5, 'ropa');";
  categoriaGasfiteria: string = "INSERT OR IGNORE INTO categoria(idcategoria, nombrecategoria) VALUES (6, 'gasfiteria');";
  categoriaKits: string = "INSERT OR IGNORE INTO categoria(idcategoria, nombrecategoria) VALUES (7, 'kits');";
  //Roles
  rolCliente: string = "INSERT OR IGNORE INTO rol(idrol, nombrerol) VALUES (1, 'cliente');";
  rolAdmin: string = "INSERT OR IGNORE INTO rol(idrol, nombrerol) VALUES (2, 'admin');";
  //preguntas
  preguntaMascota: string = "INSERT OR IGNORE INTO pregunta(idpregunta, nombrepregunta) VALUES (1, '¿Cual es el nombre de tu primera mascota?'); ";
  preguntaCiudad: string = "INSERT OR IGNORE INTO pregunta(idpregunta, nombrepregunta) VALUES (2, '¿Cual es tu ciudad natal?'); ";
  preguntaColor: string = "INSERT OR IGNORE INTO pregunta(idpregunta, nombrepregunta) VALUES (3, '¿Cual es tu color favorito?'); ";
  //Consultas
  consultaDefault: string = "INSERT OR IGNORE INTO consulta(idconsulta, nombreconsultante, mensajeconsulta) VALUES (200, 'Alvaro', 'Faltan guitarras');";
  //Usuarios
  usuarioClienteDefault: string = "INSERT OR IGNORE INTO usuario(idusuario, rut, dvrut, nombre, apellido, telefono, correo, clave, direccion, fotousuario, respuesta, rolu, preguntau) VALUES ('200', 11111111, '1', 'Javier', 'Maldonado', '12345678', 'javicci@gmail.com', 'umigod', 'Camarones 1313', '/assets/imagen.jpg', 'Umi', 1, 1);";
  usuarioAdminDefault: string = "INSERT OR IGNORE INTO usuario(idusuario, rut, dvrut, nombre, apellido, telefono, correo, clave, direccion, fotousuario, respuesta, rolu, preguntau) VALUES ('201', 22222222, '2', 'Ivan', 'Fuentes', '87654321', 'ivanfuentes@gmail.com', 'ivans', 'Piedra Roja 11', '/assets/imagen.jpg', 'Negro', 2, 3);";
  //Productos
  productoDefault: string = "INSERT OR IGNORE INTO producto(codprod, nombreprod, descripcion, precio, stock, foto, unidadmedida, categoriap) VALUES(200, 'Producto','Hola buenas tardes soy un producto', 2000, 50, '/assets/imagen.jpg', 'Por unidad', 1);";
  //Ventas
  ventaDefult: string ="INSERT OR IGNORE INTO venta(idventa, fechaventa, estado, fechaentrega, total, carrito, usuariov) VALUES (200, '04/04/2023', 'Activo', '05/05/2023', 6000, 'C', 200);";
  //Detalles
  detalleDefault: string = "INSERT OR IGNORE INTO detalle(iddetalle, cantidad, subtotal, ventad, productod) VALUES (200, 3, 6000, 200, 200);";
  //Historial de compras
  detalleCompradoDefault: string  ="INSERT OR IGNORE INTO detalleComprado(iddetallec, nombreprodc, fotoprodc, cantidadc, subtotalc, ventac) VALUES (200, 'Producto', '/assets/imagen.jpg', 3, 6000, 200);";


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
    this.presentAlert("Hola");
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



  buscarCategorias(){ 
    return this.database.executeSql("SELECT * FROM categoria;",[]).then(res =>{
      //todo bien
      let items: Categoria[] = [];
      //Validar cantidad registros
      if(res.rows.length > 0){
        //Recorrer los datos
        for(var i = 0; i < res.rows.length; i++ ){
          //Guardando los datos
          items.push({ 
            idcategoria: res.rows.item(i).idcategoria,
            nombrecategoria: res.rows.item(i).nombrecategoria });
        }
      }
      this.listaCategoria.next(items as any);

    })
  }

  buscarPregunta(){ 
    return this.database.executeSql("SELECT * FROM pregunta;",[]).then(res =>{
      //todo bien
      let items: Pregunta[] = [];
      //Validar cantidad registros
      if(res.rows.length > 0){
        //Recorrer los datos
        for(var i = 0; i < res.rows.length; i++ ){
          //Guardando los datos
          items.push({ 
            idpregunta: res.rows.item(i).idpregunta,
            nombrepregunta: res.rows.item(i).nombrepregunta });
        }
      }
      this.listaPregunta.next(items as any);

    })
  }
  

  buscarConsultas(){ 
    return this.database.executeSql("SELECT * FROM consulta;",[]).then(res =>{
      //todo bien
      let items: Consulta[] = [];
      //Validar cantidad registros
      if(res.rows.length > 0){
        //Recorrer los datos
        for(var i = 0; i < res.rows.length; i++ ){
          //Guardando los datos
          items.push({ 
            idconsulta: res.rows.item(i).idconsulta,
            nombreconsultante: res.rows.item(i).nombreconsultante,
            asuntoconsulta: res.rows.item(i).asuntoconsulta,
            mensajeconsulta: res.rows.item(i).mensajeconsulta
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
            idusuario: res.rows.item(i).idusuario,
            rut: res.rows.item(i).rut,
            dvrut: res.rows.item(i).dvrut,
            nombre: res.rows.item(i).nombre,
            apellido: res.rows.item(i).apellido,
            telefono: res.rows.item(i).telefono,
            correo: res.rows.item(i).correo,
            clave: res.rows.item(i).clave,
            direccion: res.rows.item(i).direccion,
            fotousuario: res.rows.item(i).fotousuario,
            respuesta: res.rows.item(i).respuesta,
            rolu: res.rows.item(i).rolu,
            preguntau: res.rows.item(i).preguntau
           });
        }
      }
      this.listaUsuario.next(items as any);

    })
  }

  buscarUsuario(idUsuario:any){ 
    return this.database.executeSql("SELECT * FROM usuario WHERE idusuario = ?;",[idUsuario]).then(res =>{
      //todo bien
      let items: Usuario[] = [];
      //Validar cantidad registros
      if(res.rows.length > 0){
        //Recorrer los datos
        for(var i = 0; i < res.rows.length; i++ ){
          //Guardando los datos
          items.push({ 
            idusuario: res.rows.item(i).idusuario,
            rut: res.rows.item(i).rut,
            dvrut: res.rows.item(i).dvrut,
            nombre: res.rows.item(i).nombre,
            apellido: res.rows.item(i).apellido,
            telefono: res.rows.item(i).telefono,
            correo: res.rows.item(i).correo,
            clave: res.rows.item(i).clave,
            direccion: res.rows.item(i).direccion,
            fotousuario: res.rows.item(i).fotousuario,
            respuesta: res.rows.item(i).respuesta,
            rolu: res.rows.item(i).rolu,
            preguntau: res.rows.item(i).preguntau
           });
        }
      }
      this.listaUsuario.next(items as any);

    })
  }

  buscarIdUsuario(correo:any){ 
    return this.database.executeSql("SELECT idUsuario FROM usuario WHERE correo = ?;",[correo]).then(res =>{
      //todo bien
      let items: Usuario[] = [];
      //Validar cantidad registros
      if(res.rows.length > 0){
        //Recorrer los datos
        for(var i = 0; i < res.rows.length; i++ ){
          //Guardando los datos
          items.push({ 
            idusuario: res.rows.item(i).idusuario,
            rut: res.rows.item(i).rut,
            dvrut: res.rows.item(i).dvrut,
            nombre: res.rows.item(i).nombre,
            apellido: res.rows.item(i).apellido,
            telefono: res.rows.item(i).telefono,
            correo: res.rows.item(i).correo,
            clave: res.rows.item(i).clave,
            direccion: res.rows.item(i).direccion,
            fotousuario: res.rows.item(i).fotousuario,
            respuesta: res.rows.item(i).respuesta,
            rolu: res.rows.item(i).rolu,
            preguntau: res.rows.item(i).preguntau
           });
        }
      }
      this.listaUsuario.next(items as any);
    })
  }

  buscarProductos(){ 
    return this.database.executeSql("SELECT * FROM producto;",[]).then(res =>{
      //todo bien
      let items: Producto[] = [];
      //Validar cantidad registros
      if(res.rows.length > 0){
        //Recorrer los datos
        for(var i = 0; i < res.rows.length; i++ ){
          //Guardando los datos
          items.push({ 
            codprod: res.rows.item(i).codprod,
            nombreprod: res.rows.item(i).nombreprod,
            descripcion: res.rows.item(i).descripcion,
            precio: res.rows.item(i).precio,
            stock: res.rows.item(i).stock,
            foto: res.rows.item(i).foto,
            unidadmedida: res.rows.item(i).unidadmedida,
            categoriap: res.rows.item(i).categoriap
           });
        }
      }
      this.listaProducto.next(items as any);

    })
  }
  buscarProducto(id: any){ 
    return this.database.executeSql("SELECT * FROM producto WHERE codprod = ?;",[id]).then(res =>{
      //todo bien
      let items: Producto[] = [];
      //Validar cantidad registros
      if(res.rows.length > 0){
        //Recorrer los datos
        for(var i = 0; i < res.rows.length; i++ ){
          //Guardando los datos
          items.push({ 
            codprod: res.rows.item(i).codprod,
            nombreprod: res.rows.item(i).nombreprod,
            descripcion: res.rows.item(i).descripcion,
            precio: res.rows.item(i).precio,
            stock: res.rows.item(i).stock,
            foto: res.rows.item(i).foto,
            unidadmedida: res.rows.item(i).unidadmedida,
            categoriap: res.rows.item(i).categoriap
           });
        }
      }
      this.listaProducto.next(items as any);

    })
  }

  buscarVentas(){
    return this.database.executeSql("SELECT * FROM venta;",[]).then(res =>{
      //todo bien
      let items: Venta[] = [];
      //Validar cantidad registros
      if(res.rows.length > 0){
        //Recorrer los datos
        for(var i = 0; i < res.rows.length; i++ ){
          //Guardando los datos
          items.push({ 
            idventa: res.rows.item(i).idventa,
            fechaventa: res.rows.item(i).fechaventa,
            estado: res.rows.item(i).estado,
            fechaentrega: res.rows.item(i).fechaentrega,
            total: res.rows.item(i).total,
            carrito: res.rows.item(i).carrito,
            usuariov: res.rows.item(i).usuariov
           });
        }
      }
      this.listaVenta.next(items as any);

    })
  }

  buscarVenta(id: any){
    return this.database.executeSql("SELECT * FROM venta WHERE idventa = ?;",[id]).then(res =>{
      //todo bien
      let items: Venta[] = [];
      //Validar cantidad registros
      if(res.rows.length > 0){
        //Recorrer los datos
        for(var i = 0; i < res.rows.length; i++ ){
          //Guardando los datos
          items.push({ 
            idventa: res.rows.item(i).idventa,
            fechaventa: res.rows.item(i).fechaventa,
            estado: res.rows.item(i).estado,
            fechaentrega: res.rows.item(i).fechaentrega,
            total: res.rows.item(i).total,
            carrito: res.rows.item(i).carrito,
            usuariov: res.rows.item(i).usuariov
           });
        }
      }
      this.listaVenta.next(items as any);

    })
  }

  buscarDetalles(){
    return this.database.executeSql("SELECT * FROM detalle;",[]).then(res =>{
      //todo bien
      let items: Detalle[] = [];
      //Validar cantidad registros
      if(res.rows.length > 0){
        //Recorrer los datos
        for(var i = 0; i < res.rows.length; i++ ){
          //Guardando los datos
          items.push({ 
            iddetalle: res.rows.item(i).iddetalle,
            cantidad: res.rows.item(i).cantidad,
            subtotal: res.rows.item(i).subtotal,
            ventad: res.rows.item(i).ventad,
            productod: res.rows.item(i).productod
           });
        }
      }
      this.listaDetalle.next(items as any);

    })
  }

  buscarDetalle(id: any){
    return this.database.executeSql("SELECT * FROM detalle WHERE iddetalle = ?;",[id]).then(res =>{
      //todo bien
      let items: Detalle[] = [];
      //Validar cantidad registros
      if(res.rows.length > 0){
        //Recorrer los datos
        for(var i = 0; i < res.rows.length; i++ ){
          //Guardando los datos
          items.push({ 
            iddetalle: res.rows.item(i).iddetalle,
            cantidad: res.rows.item(i).cantidad,
            subtotal: res.rows.item(i).subtotal,
            ventad: res.rows.item(i).ventad,
            productod: res.rows.item(i).productod
           });
        }
      }
      this.listaDetalle.next(items as any);

    })
  }

  buscarDetallesCompra(){
    return this.database.executeSql("SELECT * FROM detallecomprado;",[]).then(res =>{
      //todo bien
      let items: Detallecomprado[] = [];
      //Validar cantidad registros
      if(res.rows.length > 0){
        //Recorrer los datos
        for(var i = 0; i < res.rows.length; i++ ){
          //Guardando los datos
          items.push({ 
            iddetallec: res.rows.item(i).iddetallec,
            nombreprodc: res.rows.item(i).nombreprodc,
            fotoprodc: res.rows.item(i).fotoProdc,
            cantidadc: res.rows.item(i).cantidadc,
            subtotalc: res.rows.item(i).subtotalc,
            ventac: res.rows.item(i).ventac
           });
        }
      }
      this.listaDetalle.next(items as any);

    })
  }

  buscarDetalleCompra(id: any){
    return this.database.executeSql("SELECT * FROM detallecomprado WHERE iddetallec = ?;",[id]).then(res =>{
      //todo bien
      let items: Detallecomprado[] = [];
      //Validar cantidad registros
      if(res.rows.length > 0){
        //Recorrer los datos
        for(var i = 0; i < res.rows.length; i++ ){
          //Guardando los datos
          items.push({ 
            iddetallec: res.rows.item(i).iddetallec,
            nombreprodc: res.rows.item(i).nombreprodc,
            fotoprodc: res.rows.item(i).fotoprodc,
            cantidadc: res.rows.item(i).cantidadc,
            subtotalc: res.rows.item(i).subtotalc,
            ventac: res.rows.item(i).ventac
           });
        }
      }
      this.listaDetalle.next(items as any);

    })
  }


  //Funciones para eliminar


  eliminarUsuario(id:any){ 
    return this.database.executeSql("DELETE FROM usuario WHERE idusuario= ?",[id]).then(res=>{
      this.buscarUsuarios();

    })
  }
  eliminarProducto(id:any){ 
    return this.database.executeSql("DELETE FROM producto WHERE codprod= ?",[id]).then(res=>{
      this.buscarProductos();

    })
  }
  eliminarConsulta(id:any){ 
    return this.database.executeSql("DELETE FROM consulta WHERE idconsulta= ?",[id]).then(res=>{
      this.buscarConsultas();

    })
  }
  //Funciones para agregar

  agregarConsulta(nombre: any, asunto: any, mensaje: any){  
    return this.database.executeSql("INSERT INTO detalle(nombreconsultante, asuntoconsulta, mensajeconsulta) VALUES(?, ?, ?)",[nombre, asunto, mensaje]).then(res=> {
      this.buscarConsultas(); 
    })
  }

  agregarUsuario(nombre: any, apellido: any, rut: any, dvrut: any, telefono: any, correo: any, direccion: any, clave: any, foto: any, respuesta: any, rol: any, pregunta: any){  
    return this.database.executeSql("INSERT INTO usuario(rut, dvrut, nombre, apellido, telefono, correo, clave, direccion, fotousuario, respuesta, rolu, preguntau) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",[rut, dvrut, nombre, apellido, telefono, correo, clave, direccion, foto, respuesta, rol, pregunta]).then(res=> {
      this.buscarUsuarios(); 
    })
  }

  agregarProducto( nombre: any, descripcion: any, precio: any, stock: any, foto: any, medida: any, categoria: any){  
    return this.database.executeSql("INSERT INTO producto(nombreprod, descripcion, precio, stock, foto, unidadmedida, categoriap) VALUES(?, ?, ?, ?, ?, ?, ?, ?)",[nombre, descripcion, precio, stock, foto, medida, categoria]).then(res=> {
      this.buscarProductos(); 
    })
  }

  agregarVenta(fechav: any, estado: any, fechae: any, total: any, carrito: any, usuariov: any){  
    return this.database.executeSql("INSERT INTO venta(fechaventa, estado, fechaentrega, total, carrito, usuariov) VALUES(?, ?, ?, ?, ?, ?)",[fechav, estado, fechae, total, carrito, usuariov]).then(res=> {
      this.buscarVentas(); 
    })
  }

  agregarDetalle(cantidad: any, subtotal: any, ventad: any, productod: any){  
    return this.database.executeSql("INSERT INTO detalle(cantidad, subtotal, ventad, productod) VALUES(?, ?, ?, ?)",[cantidad, subtotal, ventad, productod]).then(res=> {
      this.buscarDetalles(); 
    })
  }

  agregarDetalleCompra(nombre: any, foto: any, cantidad: any, subtotal: any, venta: any){  
    return this.database.executeSql("INSERT INTO detallecomprado(nombreprodc, fotoprodc, cantidadc, subtotalc, ventac) VALUES(?, ?, ?, ?, ?)",[nombre, foto, cantidad, subtotal, venta]).then(res=> {
      this.buscarDetallesCompra(); 
    })
  }

  //Funciones para modificar
  //Usuario
  modificarUsuario(id: any, nombre: any,  apellido: any, rut: any, dvrut: any, telefono: any, correo: any, direccion: any, foto: any, respuesta: any, pregunta: any ){  
    return this.database.executeSql("UPDATE usuario SET nombre = ?, apellido = ?, rut = ?, dvrut = ?, telefono = ?, correo = ?, direccion = ?, fotousuario = ?, respuesta = ?, preguntau = ? WHERE idusuario = ?",[nombre, apellido, rut, dvrut, telefono, correo, direccion, foto, respuesta, pregunta, id]).then(res =>{
      this.buscarUsuarios();
    })
  }

  modificarClave(id: any, clave: any ){  
    return this.database.executeSql("UPDATE usuario SET clave = ? WHERE idusuario = ?",[clave, id]).then(res =>{
      this.buscarUsuarios();
    })
  }

  modificarRol(id: any, rol: any ){  
    return this.database.executeSql("UPDATE usuario SET rolu = ? WHERE idusuario = ?",[rol, id]).then(res =>{
      this.buscarUsuarios();
    })
  }
  //Producto
  modificarProducto(id: any, nombre: any, descripcion: any, precio: any, stock: any, foto: any, medida: any, categoria: any){  
    return this.database.executeSql("UPDATE producto SET nombreprod = ?, descripcion = ?, precio = ?, stock = ?, foto = ?, unidadmedida = ?, categoriap = ?  WHERE codprod = ?",[nombre, descripcion, precio, stock, foto, medida, categoria, id]).then(res =>{
      this.buscarProductos();
    })
  }

  //Venta/carrito
  modificarEstadoVenta(id: any, estado: any){  
    return this.database.executeSql("UPDATE venta SET estado = ? WHERE idventa = ?",[estado, id]).then(res =>{
      this.buscarVentas();
    })
  }

  modificarEntrega(id: any, entrega: any){  
    return this.database.executeSql("UPDATE venta SET fechaentrega = ? WHERE idventa = ?",[entrega, id]).then(res =>{
      this.buscarVentas();
    })
  }

  modificarCarrito(id: any, carrito: any){  
    return this.database.executeSql("UPDATE venta SET carrito = ? WHERE idventa = ?",[carrito, id]).then(res =>{
      this.buscarVentas();
    })
  }

  modificarTotal(id: any, total: any){  
    return this.database.executeSql("UPDATE venta SET total = ? WHERE idventa = ?",[total, id]).then(res =>{
      this.buscarVentas();
    })
  }
  
  modificarDetalle(id: any, subtotal: any, cantidad: any){  
    return this.database.executeSql("UPDATE detalle SET subtotal = ?, cantidad = ? WHERE idventa = ?",[subtotal, cantidad, id]).then(res =>{
      this.buscarDetalles();
    })
  }

  crearDB(){
    //Plataforma lista
    this.plataforma.ready().then(()=>{
      //Crear DB
      this.base.create({name: 'ivans.db', location: 'default'
    }).then((db: SQLiteObject)=>{
      this.database = db;
      this.crearTablas;
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

      this.buscarUsuarios;
      this.buscarConsultas;
      this.buscarDetalles;
      this.buscarProductos;
      this.buscarCategorias;
      this.buscarVentas;
      this.buscarDetallesCompra;

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