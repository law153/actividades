import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {
  categoria: string = "CREATE TABLE IF NOT EXISTS categoria(id_categoria INTEGER PRIMARY KEY, nombre_categoria TEXT NOT NULL);";
  rol: string = "CREATE TABLE IF NOT EXISTS rol(id_rol INTEGER PRIMARY KEY, nombre_rol TEXT NOT NULL);";
  pregunta: string = "CREATE TABLE IF NOT EXISTS pregunta(id_pregunta INTEGER PRIMARY KEY, nombre_pregunta TEXT NOT NULL);";
  consulta: string = "CREATE TABLE IF NOT EXISTS consulta(id_consulta INTEGER PRIMARY KEY, nombre_consultante TEXT NOT NULL, asunto_consulta TEXT NOT NULL, mensaje_consulta TEXT NOT NULL);";
  usuario: string = "CREATE TABLE IF NOT EXISTS usuario(id_usuario INTEGER PRIMARY KEY, rut INTEGER NOT NULL, dvrut CHAR(1) NOT NULL, nombre TEXT NOT NULL, apellido TEXT NOT NULL, telefono INTEGER NOT NULL, correo TEXT NOT NULL, clave TEXT NOT NULL, direccion TEXT NOT NULL, respuesta TEXT NOT NULL, id_rol INTEGER NOT NULL, id_pregunta INTEGER NOT NULL, FOREIGN KEY (id_rol) REFERENCES rol(id_rol), FOREIGN KEY (id_pregunta) REFERENCES pregunta(id_pregunta));";
  producto: string = "CREATE TABLE IF NOT EXISTS producto(cod_prod INTEGER PRIMARY KEY, nombre_prod TEXT NOT NULL, descripcion TEXT NOT NULL, precio INTEGER NOT NULL, stock INTEGER NOT NULL, foto BLOB NOT NULL, unidad_medida TEXT NOT NULL, id_categoria INTEGER NOT NULL, FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria));";
  venta: string = "CREATE TABLE IF NOT EXISTS venta(id_venta INTEGER PRIMARY KEY, fecha_venta DATE NOT NULL, estado TEXT NOT NULL, fecha_entrega DATE NOT NULL, total INTEGER NOT NULL, carrito CHAR(1), id_usuario INTEGER NOT NULL, FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario) );";
  detalle: string= "CREATE TABLE IF NOT EXISTS detalle(id_detalle INTEGER PRIMARY KEY, cantidad INTEGER NOT NULL, subtotal INTEGER NOT NULL, id_venta INTEGER NOT NULL, cod_prod INTEGER NOT NULL, FOREIGN KEY (id_venta) REFERENCES venta(id_venta), FOREIGN KEY (cod_prod) REFERENCES producto(cod_prod) );";
  constructor() { }
}
