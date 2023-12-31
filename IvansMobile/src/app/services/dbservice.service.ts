
import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, Observable, firstValueFrom, lastValueFrom } from 'rxjs';
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
import { DetallesVenta } from './detalles-venta';

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
  usuario: string = "CREATE TABLE IF NOT EXISTS usuario(idusuario INTEGER PRIMARY KEY AUTOINCREMENT, rut INTEGER NOT NULL, dvrut CHAR(1) NOT NULL, nombre TEXT NOT NULL, apellido TEXT NOT NULL, telefono INTEGER NOT NULL, correo TEXT NOT NULL, clave TEXT NOT NULL, direccion TEXT NOT NULL, fotousuario TEXT NOT NULL ,respuesta TEXT NOT NULL, rolu INTEGER NOT NULL, preguntau INTEGER NOT NULL, FOREIGN KEY (rolu) REFERENCES rol(idrol), FOREIGN KEY (preguntau) REFERENCES pregunta(idpregunta));";
  producto: string = "CREATE TABLE IF NOT EXISTS producto(codprod INTEGER PRIMARY KEY AUTOINCREMENT, nombreprod TEXT NOT NULL, descripcion TEXT NOT NULL, precio INTEGER NOT NULL, stock INTEGER NOT NULL, foto TEXT NOT NULL, unidadmedida TEXT NOT NULL, categoriap INTEGER NOT NULL, FOREIGN KEY (categoriap) REFERENCES categoria(idcategoria));";
  venta: string = "CREATE TABLE IF NOT EXISTS venta(idventa INTEGER PRIMARY KEY AUTOINCREMENT, fechaventa DATE NOT NULL, estado TEXT NOT NULL, fechaentrega DATE NOT NULL, total INTEGER NOT NULL, carrito CHAR(1), usuariov INTEGER NOT NULL, FOREIGN KEY (usuariov) REFERENCES usuario(idusuario) );";
  detalle: string= "CREATE TABLE IF NOT EXISTS detalle(iddetalle INTEGER PRIMARY KEY AUTOINCREMENT, cantidad INTEGER NOT NULL, subtotal INTEGER NOT NULL, ventad INTEGER NOT NULL, productod INTEGER NOT NULL, FOREIGN KEY (ventad) REFERENCES venta(idventa), FOREIGN KEY (productod) REFERENCES producto(codprod) );";
  detalleComprado: string ="CREATE TABLE IF NOT EXISTS detallecomprado(iddetallec INTEGER PRIMARY KEY AUTOINCREMENT, nombreprodc TEXT NOT NULL, fotoprodc TEXT NOT NULL, cantidadc INTEGER NOT NULL, subtotalc INTEGER NOT NULL, ventac INTEGER NOT NULL, FOREIGN KEY (ventac) REFERENCES venta(idventa) );";

  //Variables para insert iniciales

  //Categorias
  categoriaHerramientas: string = "INSERT OR IGNORE INTO categoria(idcategoria, nombrecategoria) VALUES (1, 'Herramientas');";
  categoriaElectricidad: string = "INSERT OR IGNORE INTO categoria(idcategoria, nombrecategoria) VALUES (2, 'Electricidad');";
  categoriaFijaciones: string = "INSERT OR IGNORE INTO categoria(idcategoria, nombrecategoria) VALUES (3, 'Fijaciones');";
  categoriaSeguridad: string = "INSERT OR IGNORE INTO categoria(idcategoria, nombrecategoria) VALUES (4, 'Seguridad');";
  categoriaRopa: string = "INSERT OR IGNORE INTO categoria(idcategoria, nombrecategoria) VALUES (5, 'Ropa');";
  categoriaGasfiteria: string = "INSERT OR IGNORE INTO categoria(idcategoria, nombrecategoria) VALUES (6, 'Gasfiteria');";
  categoriaKits: string = "INSERT OR IGNORE INTO categoria(idcategoria, nombrecategoria) VALUES (7, 'Kits');";
  //Roles
  rolCliente: string = "INSERT OR IGNORE INTO rol(idrol, nombrerol) VALUES (1, 'cliente');";
  rolAdmin: string = "INSERT OR IGNORE INTO rol(idrol, nombrerol) VALUES (2, 'admin');";
  //preguntas
  preguntaMascota: string = "INSERT OR IGNORE INTO pregunta(idpregunta, nombrepregunta) VALUES (1, '¿Cual es el nombre de tu primera mascota?'); ";
  preguntaCiudad: string = "INSERT OR IGNORE INTO pregunta(idpregunta, nombrepregunta) VALUES (2, '¿Cual es tu ciudad natal?'); ";
  preguntaColor: string = "INSERT OR IGNORE INTO pregunta(idpregunta, nombrepregunta) VALUES (3, '¿Cual es tu color favorito?'); ";
  //Consultas
  consultaDefault: string = "INSERT OR IGNORE INTO consulta(idconsulta, nombreconsultante, asuntoconsulta ,mensajeconsulta) VALUES (200, 'Alvaro','Problema' ,'Faltan guitarras');";
  //Usuarios
  usuarioClienteDefault: string = "INSERT OR IGNORE INTO usuario(idusuario, rut, dvrut, nombre, apellido, telefono, correo, clave, direccion, fotousuario, respuesta, rolu, preguntau) VALUES ('200', 21475570, 'k', 'Javier', 'Maldonado', '12345678', 'javicci@gmail.com', 'umigod', 'Camarones 1313', '/assets/imagen.jpg', 'Umi', 1, 1);";
  usuarioAdminDefault: string = "INSERT OR IGNORE INTO usuario(idusuario, rut, dvrut, nombre, apellido, telefono, correo, clave, direccion, fotousuario, respuesta, rolu, preguntau) VALUES ('201', 21277965, '2', 'Ivan', 'Fuentes', '87654321', 'ivanfuentes@gmail.com', 'ivans', 'Piedra Roja 11', '/assets/icono-perfil.png', 'Negro', 2, 3);";
  //Productos
  producto1Default: string = "INSERT OR IGNORE INTO producto(codprod, nombreprod, descripcion, precio, stock, foto, unidadmedida, categoriap) VALUES(200, 'Destornillador','Hola buenas tardes soy un destornillador', 2000, 50, '/assets/destornillador.jpg', 'Por unidad', 1);";
  producto2Default: string = "INSERT OR IGNORE INTO producto(codprod, nombreprod, descripcion, precio, stock, foto, unidadmedida, categoriap) VALUES(201, 'Bateria','Hola buenas tardes soy una bateria', 1000, 50, '/assets/Bateria.jpg', 'Por docena', 2);";
  producto3Default: string = "INSERT OR IGNORE INTO producto(codprod, nombreprod, descripcion, precio, stock, foto, unidadmedida, categoriap) VALUES(202, 'Pestillo','Hola buenas tardes soy un pestillo', 2500, 50, '/assets/pestillo.jpg', 'Por unidad', 3);";
  //Ventas
  ventaDefult: string ="INSERT OR IGNORE INTO venta(idventa, fechaventa, estado, fechaentrega, total, carrito, usuariov) VALUES (200, '04/04/2023', 'Activo', '05/05/2023', 6000, 'C', 200);";

  //ventaDefult2: string ="INSERT OR IGNORE INTO venta(idventa, fechaventa, estado, fechaentrega, total, carrito, usuariov) VALUES (199, '07/07/2023', 'Comprado', '05/05/2024', 6000, 'C', 201);";
  //Detalles
  detalleDefault: string = "INSERT OR IGNORE INTO detalle(iddetalle, cantidad, subtotal, ventad, productod) VALUES (200, 3, 6000, 200, 200);";
  //Historial de compras
  //detalleCompradoDefault: string  ="INSERT OR IGNORE INTO detalleComprado(iddetallec, nombreprodc, fotoprodc, cantidadc, subtotalc, ventac) VALUES (199, 'Producto', '/assets/imagen.jpg', 3, 6000, 199);";

  //Observables de tablas 
  listaRol = new BehaviorSubject([]); 

  listaUsuario = new BehaviorSubject([]);
  listaProducto = new BehaviorSubject([]);
  listaVenta = new BehaviorSubject([]);
  listaDetalle = new BehaviorSubject([]);
  listaConsulta = new BehaviorSubject([]);
  listaDetalleComprado = new BehaviorSubject([]);
  listaCategoria = new BehaviorSubject([]);
  listaPregunta = new BehaviorSubject([]);
  listaDetallesVenta = new BehaviorSubject([]);

  listaCategoriaIndividual = new BehaviorSubject([]);
  
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

  fetchDetallesVenta(): Observable<DetallesVenta[]>{
    return this.listaDetallesVenta.asObservable();
  }

  fetchCategoriaIndividual(): Observable<Categoria[]>{
    return this.listaCategoriaIndividual.asObservable();
  }


  promiseDetalle(): Promise<Detalle[]> {
    return firstValueFrom(this.listaDetalle);
  }
  
  promiseVenta(): Promise<Venta[]> {
    return firstValueFrom(this.listaVenta);
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

  buscarCategoriaPorId(id : any){
    return this.database.executeSql("SELECT * FROM categoria where idcategoria = ?;", [id]).then(res =>{
      let items: Categoria[] = [];
      if(res.rows.length > 0){
        for(var i = 0; i < res.rows.length; i++){
          items.push({
            idcategoria: res.rows.item(i).idcategoria,
            nombrecategoria: res.rows.item(i).nombrecategoria
          });
        }
      }
      this.listaCategoriaIndividual.next(items as any);
    })
  }


  buscarCatePorId(id: any): Observable<Categoria[]>{
    return new Observable<Categoria[]>(observer => {
      this.database.executeSql("SELECT * FROM categoria where idcategoria = ?;", [id]).then(res =>{
        let items: Categoria[] = [];
        if(res.rows.length > 0){
          for (let i = 0; i < res.rows.length; i++) {
            items.push({
              idcategoria: res.rows.item(i).idcategoria,
              nombrecategoria: res.rows.item(i).nombrecategoria
            });
          }
        }
        observer.next(items);
        observer.complete();
      });
    });
  }

  buscarPreguntas(){ 
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

  buscarPregunta(id: any){ 
    return this.database.executeSql("SELECT * FROM pregunta where idpregunta = ?;",[id]).then(res =>{
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

  buscarUsuarioMenosTu(correo:any){ 
    return this.database.executeSql("SELECT * FROM usuario WHERE correo != ?;",[correo]).then(res =>{
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

  buscarPorCorreo(correo: any): Observable<Usuario[]> {

    return new Observable<Usuario[]>(observer => {
      this.database.executeSql("SELECT * FROM usuario WHERE correo = ?;", [correo]).then(res => {
        let items: Usuario[] = [];
  
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
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
  
        observer.next(items);
        observer.complete();
      });
    });
  }

  buscarCorreo(correo: any): Promise<Usuario[]> {

    return new Promise<Usuario[]>((resolve, reject) => {
      this.database.executeSql("SELECT * FROM usuario WHERE correo = ?;", [correo]).then(res => {
        let items: Usuario[] = [];
  
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
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
          resolve(items);
        } else {
          resolve([]);
        }
      }).catch(error => {
        reject(error);
      });
    });
  }
  

  buscarPorRut(rut: any): Observable<Usuario[]> {
    
    return new Observable<Usuario[]> (observer => {
      this.database.executeSql("SELECT * from usuario where rut = ?;",[rut]).then(res => {
        let items: Usuario[] = [];
        if (res.rows.length > 0){
          for (let i = 0; i < res.rows.length; i++) {
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
        observer.next(items);
        observer.complete();
      });
    });
  }

  buscarRut(rut: any): Promise<Usuario[]> {
    
    return new Promise<Usuario[]>((resolve, reject) => {
      this.database.executeSql("SELECT * FROM usuario WHERE rut = ?;", [rut]).then(res => {
        let items: Usuario[] = [];
  
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
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
          resolve(items);
        } else {
          resolve([]);
        }
      }).catch(error => {
        reject(error);
      });
    });
  }

  buscarPorCorreoMenosTu(correo: any, id: any): Promise<Usuario[]> {
    return new Promise<Usuario[]>(async (resolve, reject) => {
      
      try {
        const res = await this.database.executeSql("SELECT * FROM usuario WHERE correo = ? AND idusuario != ?;", [correo, id]);
  
        let items: Usuario[] = [];
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
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
          resolve(items);
        } else {
          resolve([]);
        }
      } catch (error) {
        reject(error);
      }
    });
  }
  

  buscarPorRutMenosTu(rut: any, id: any): Promise<Usuario[]> {
    
    return new Promise<Usuario[]>((resolve, reject) => {
      this.database.executeSql("SELECT * from usuario where rut = ? AND idusuario != ?;", [rut, id]).then(res => {
        let items: Usuario[] = [];
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
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
          resolve(items);
        } else {
          resolve([]); // Resuelve un array vacío si no se encontraron resultados
        }
      }).catch(error => {
        reject(error);
      });
    });
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
  buscarProducto2(id: any): Promise<Producto[]> {
    return new Promise<Producto[]>((resolve, reject) => {
      this.database.executeSql("SELECT * FROM producto WHERE codprod = ?;", [id]).then(res => {
        let items: Producto[] = [];
  
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
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
          resolve(items);
        } else {
          resolve([]); // Resuelve un array vacío si no se encontraron resultados
        }
      }).catch(error => {
        reject(error);
      });
    });
  }
  

  buscarProductoCate(id: any){ 
    return this.database.executeSql("SELECT * FROM producto WHERE categoriap = ?;",[id]).then(res =>{
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

  buscarVenta2(id: any): Promise<Venta[]> {
    
    return new Promise<Venta[]>((resolve, reject) => {
      this.database.executeSql("SELECT * FROM venta WHERE idventa = ?;", [id]).then(res => {
        let items: Venta[] = [];

        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
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
          resolve(items);
        } else {
          resolve([]);
        }
      }).catch(error => {
        reject(error);
      });
    });
  }

  buscarVentaCarrito(usuario: any, estado: any): Observable<Venta[]> {
   
    return new Observable<Venta[]>(observer => {
      this.database.executeSql("SELECT * FROM venta WHERE usuariov = ? AND estado = ?;", [usuario, estado]).then(res => {
        let items: Venta[] = [];
  
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
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
  
        observer.next(items);
        observer.complete();
      });
    });
  }

  buscarVentaCarrito2(usuario: any, estado: any): Promise<Venta[]> {
    
    return new Promise<Venta[]>((resolve, reject) => {
      this.database.executeSql("SELECT * FROM venta WHERE usuariov = ? AND estado = ?;", [usuario, estado]).then(res => {
        let items: Venta[] = [];

        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
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
          resolve(items);
        } else {
          resolve([]);
        }
      }).catch(error => {
        reject(error);
      });
    });
  }

  buscarVentaCarrito3(usuario: any, estado: any){

    return this.database.executeSql("SELECT * FROM venta WHERE usuariov = ? AND estado = ?;", [usuario, estado]).then(res =>{
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


  buscarCompras(estado: any): Observable<Venta[]> {
    return new Observable<Venta[]>(observer => {
      this.database.executeSql("SELECT * FROM venta WHERE estado = ?;", [estado]).then(res => {
        let items: Venta[] = [];
  
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
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
  
        observer.next(items);
        observer.complete();
      });
    });
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
  buscarDetalleProd(prod: any, venta: any): Observable<Detalle[]> {
    return new Observable<Detalle[]>(observer => {
      this.database.executeSql("SELECT * FROM detalle WHERE productod = ? AND ventad = ?;", [prod, venta]).then(res => {
        let items: Detalle[] = [];
  
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            items.push({
              iddetalle: res.rows.item(i).iddetalle,
              cantidad: res.rows.item(i).cantidad,
              subtotal: res.rows.item(i).subtotal,
              ventad: res.rows.item(i).ventad,
              productod: res.rows.item(i).productod
            });
          }
        }
  
        observer.next(items);
        observer.complete();
      });
    });
  }

  buscarDetalleProd2(prod: any, venta: any): Promise<Detalle[]> {
    return new Promise<Detalle[]>((resolve, reject) => {
      this.database.executeSql("SELECT * FROM detalle WHERE productod = ? AND ventad = ?;", [prod, venta])
        .then(res => {
          let items: Detalle[] = [];
  
          if (res.rows.length > 0) {
            for (let i = 0; i < res.rows.length; i++) {
              items.push({
                iddetalle: res.rows.item(i).iddetalle,
                cantidad: res.rows.item(i).cantidad,
                subtotal: res.rows.item(i).subtotal,
                ventad: res.rows.item(i).ventad,
                productod: res.rows.item(i).productod
              });
            }
          }
  
          resolve(items);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  

  buscarDetallesVenta(venta: any): Observable<DetallesVenta[]> {
    return new Observable<DetallesVenta[]>(observer => {
      this.database.executeSql("SELECT d.iddetalle, d.cantidad, d.subtotal, d.ventad ,d.productod, p.nombreprod, p.precio, p.stock, p.foto FROM detalle d JOIN producto p ON(d.productod = p.codprod) WHERE ventad = ?;", [venta]).then(res => {
        let items: DetallesVenta[] = [];
  
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            items.push({
              iddetalle: res.rows.item(i).iddetalle,
              cantidad: res.rows.item(i).cantidad,
              subtotal: res.rows.item(i).subtotal,
              ventad: res.rows.item(i).ventad,
              productod: res.rows.item(i).productod,
              nombreprod: res.rows.item(i).nombreprod,
              precio: res.rows.item(i).precio,
              stock: res.rows.item(i).stock,
              foto: res.rows.item(i).foto
            });
          }
        }
  
        observer.next(items);
        observer.complete();
      });
    });
  }

  buscarDetallesVenta2(venta: any): Promise<DetallesVenta[]> {
   
    return new Promise<DetallesVenta[]>((resolve, reject) => {
      this.database.executeSql("SELECT d.iddetalle, d.cantidad, d.subtotal, d.ventad, d.productod, p.nombreprod, p.precio, p.stock, p.foto FROM detalle d JOIN producto p ON(d.productod = p.codprod) WHERE ventad = ?;", [venta]).then(res => {
        let items: DetallesVenta[] = [];
  
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            items.push({
              iddetalle: res.rows.item(i).iddetalle,
              cantidad: res.rows.item(i).cantidad,
              subtotal: res.rows.item(i).subtotal,
              ventad: res.rows.item(i).ventad,
              productod: res.rows.item(i).productod,
              nombreprod: res.rows.item(i).nombreprod,
              precio: res.rows.item(i).precio,
              stock: res.rows.item(i).stock,
              foto: res.rows.item(i).foto
            });
          }
          resolve(items);
        } else {
          resolve([]);
        }
      }).catch(error => {
        reject(error);
      });
    });
  }

  buscarDetallesVenta3(venta: any){
    return this.database.executeSql("SELECT d.iddetalle, d.cantidad, d.subtotal, d.ventad, d.productod, p.nombreprod, p.precio, p.stock, p.foto FROM detalle d JOIN producto p ON(d.productod = p.codprod) WHERE ventad = ?;", [venta]).then(res =>{
      //todo bien
      let items: DetallesVenta[] = [];
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
            productod: res.rows.item(i).productod,
            nombreprod: res.rows.item(i).nombreprod,
            precio: res.rows.item(i).precio,
            stock: res.rows.item(i).stock,
            foto: res.rows.item(i).foto
           });
        }
      }
      this.listaDetallesVenta.next(items as any);

    })
  }
  

  buscarDetallesVentaPorD(id: any): Observable<DetallesVenta[]> {
    return new Observable<DetallesVenta[]>(observer => {
      this.database.executeSql("SELECT d.iddetalle, d.cantidad, d.subtotal, d.ventad ,d.productod, p.nombreprod, p.precio, p.stock, p.foto FROM detalle d JOIN producto p ON(d.productod = p.codprod) WHERE d.iddetalle = ?;", [id]).then(res => {
        let items: DetallesVenta[] = [];
  
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            items.push({
              iddetalle: res.rows.item(i).iddetalle,
              cantidad: res.rows.item(i).cantidad,
              subtotal: res.rows.item(i).subtotal,
              ventad: res.rows.item(i).ventad,
              productod: res.rows.item(i).productod,
              nombreprod: res.rows.item(i).nombreprod,
              precio: res.rows.item(i).precio,
              stock: res.rows.item(i).stock,
              foto: res.rows.item(i).foto
            });
          }
        }
  
        observer.next(items);
        observer.complete();
      });
    });
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

  async buscarDetallesCompra2(): Promise<Detallecomprado[]> {

    return new Promise<Detallecomprado[]>(async (resolve, reject) => {
      try {
        const res = await this.database.executeSql("SELECT * FROM detallecomprado;", []);
        let items: Detallecomprado[] = [];
    
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
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
          resolve(items);
        } catch (error) {
          reject(error);
        }
      });

  }
  
  
  

  buscarDetallesCompraVenta(venta: any): Observable<Detallecomprado[]> {
    return new Observable<Detallecomprado[]>(observer => {
      this.database.executeSql("SELECT * FROM detallecomprado WHERE ventac = ?;", [venta]).then(res => {
        let items: Detallecomprado[] = [];
  
        // Validar cantidad de registros
        if (res.rows.length > 0) {
          // Recorrer los datos
          for (var i = 0; i < res.rows.length; i++) {
            // Guardando los datos
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
  
        observer.next(items);
        observer.complete();
      });
    });
  }
  
  async buscarDetallesCompraVenta2(venta: any): Promise<Detallecomprado[]> {
    return new Promise<Detallecomprado[]>(async (resolve, reject) => {
      try {
        const res = await this.database.executeSql("SELECT * FROM detallecomprado WHERE ventac = ?;", [venta]);
        let items: Detallecomprado[] = [];
    
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
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
        resolve(items);
      } catch (error) {
        reject(error);
      }
    });
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

  eliminarDetalle(id:any, idv: any){ 
    return this.database.executeSql("DELETE FROM detalle WHERE iddetalle= ?",[id]).then(res=>{
      this.buscarDetallesVenta3(idv);

    })
  }
  //Funciones para agregar


  agregarConsulta(nombre: any, asunto: any, mensaje: any){  
    return this.database.executeSql("INSERT INTO consulta(nombreconsultante, asuntoconsulta, mensajeconsulta) VALUES(?, ?, ?);",[nombre, asunto, mensaje])
      .then(res => {
        if (res.rowsAffected > 0) {
          const idInsertado = res.insertId;
          this.buscarConsultas();
        } else {
          console.error('Error al enviar los datos.');
        }
      })
      .catch(error => {
        console.error('Error al ejecutar la consulta SQL:', error);
      });
  }
  

  agregarUsuario(nombre: any, apellido: any, rut: any, dvrut: any, telefono: any, correo: any, direccion: any, clave: any, foto: any, respuesta: any, rol: any, pregunta: any) {  
    return this.database.executeSql("INSERT INTO usuario(rut, dvrut, nombre, apellido, telefono, correo, clave, direccion, fotousuario, respuesta, rolu, preguntau) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [rut, dvrut, nombre, apellido, telefono, correo, clave, direccion, foto, respuesta, rol, pregunta]).then(res => {
      const idUsuarioInsertado = res.insertId;

  
      this.buscarUsuarios();
    }).catch(error => {
      console.error('Error al agregar usuario:', error);
    });
  }
  
  

  agregarProducto(nombre: any, descripcion: any, precio: any, stock: any, foto: any, medida: any, categoria: any) {  
    return this.database.executeSql("INSERT INTO producto(nombreprod, descripcion, precio, stock, foto, unidadmedida, categoriap) VALUES(?, ?, ?, ?, ?, ?, ?)", [nombre, descripcion, precio, stock, foto, medida, categoria]).then(res => {
      const codProdInsertado = res.insertId;

  
      this.buscarProductos();
    }).catch(error => {
      console.error('Error al agregar producto:', error);
    });
  }
  

  agregarVenta(fechav: any, estado: any, fechae: any, total: any, carrito: any, usuariov: any): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        this.database.executeSql("INSERT INTO venta(fechaventa, estado, fechaentrega, total, carrito, usuariov) VALUES(?, ?, ?, ?, ?, ?)", [fechav, estado, fechae, total, carrito, usuariov]).then(res => {
            this.buscarVentas();
            // Obtener el ID de la venta recién insertada
            const ventaId = res.insertId;
            resolve(ventaId);
        }).catch(error => {
            reject(error);
        });
    });
}

  

  agregarDetalle(cantidad: any, subtotal: any, ventad: any, productod: any){  
    return this.database.executeSql("INSERT INTO detalle(cantidad, subtotal, ventad, productod) VALUES(?, ?, ?, ?)",[cantidad, subtotal, ventad, productod]).then(res=> {
      this.buscarDetalles(); 
    })
  }

  agregarDetalleCompra(nombre: any, foto: any, cantidad: any, subtotal: any, venta: any) {  
    return this.database.executeSql("INSERT INTO detallecomprado(nombreprodc, fotoprodc, cantidadc, subtotalc, ventac) VALUES (?, ?, ?, ?, ?)", [nombre, foto, cantidad, subtotal, venta]).then(res => {
      this.buscarDetallesCompra(); // Actualizar la lista de detalles de compra
    });
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

  restarStock(id: any, stock: any){  

    return this.database.executeSql("UPDATE producto SET stock = stock - ? WHERE codprod = ?",[stock, id]).then(res =>{
      this.buscarProductos();
    })
  }

  //Venta/carrito
  modificarEstadoVenta(id: any, fecha: any){  
    return this.database.executeSql("UPDATE venta SET estado = ? WHERE idventa = ?",[fecha, id]).then(res =>{
      this.buscarVentas();
    })
  }

  modificarFechaEntrega(id: any, estado: any){  
    return this.database.executeSql("UPDATE venta SET fechaentrega = ? WHERE idventa = ?",[estado, id]).then(res =>{
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
      this.buscarVenta(id);
    })
  }

  sumarTotal(id: any, suma: any){
    return this.database.executeSql("UPDATE venta SET total = total + ? WHERE idventa = ?",[suma, id]).then(res =>{
      this.buscarVentas();
    })
  }

  restarTotal(id: any, resta: any){
    return this.database.executeSql("UPDATE venta SET total = total - ? WHERE idventa = ?",[resta, id]).then(res =>{
      this.buscarVentas();
    })
  }
  
  modificarDetalle(id: any, subtotal: any, cantidad: any, idv: any){  
    return this.database.executeSql("UPDATE detalle SET subtotal = ?, cantidad = ? WHERE iddetalle = ?",[subtotal, cantidad, id]).then(res =>{
      this.buscarDetallesVenta3(idv);
    })
  }

  crearDB() {
    // Plataforma lista
    this.plataforma.ready().then(() => {
      // Crear DB
      this.base.create({
        name: 'ivans.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        this.crearTablas();
      }).catch(e => {
        console.error('Error al crear la base de datos:', e);
        this.presentAlert("Error en crear BD: " + e);
      });
    });
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

      await this.database.executeSql(this.producto1Default,[]);
      await this.database.executeSql(this.producto2Default,[]);
      await this.database.executeSql(this.producto3Default,[]);

      await this.database.executeSql(this.ventaDefult,[]);
      //await this.database.executeSql(this.ventaDefult2,[]);

      await this.database.executeSql(this.detalleDefault,[]);

      //await this.database.executeSql(this.detalleCompradoDefault,[]);
      //Actualizar el observable bandera
      this.flag.next(true);
      //Llamar los select

      this.buscarUsuarios();
      this.buscarConsultas();
      this.buscarDetalles();
      this.buscarProductos();
      this.buscarCategorias();
      this.buscarPreguntas();
      this.buscarVentas();
      this.buscarDetallesCompra();

    } catch (e) {
      this.presentAlert("Error en crear Tabla: " + e);
    }
  }




  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Atención!',
      message: mensaje,
      buttons: ['Aceptar'],
    });

    await alert.present();
  }


}