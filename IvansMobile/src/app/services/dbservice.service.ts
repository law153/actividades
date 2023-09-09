import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {
  categoria: string = "CREATE TABLE IF NOT EXISTS categoria(id_categoria INTEGER PRIMARY KEY, nombre_categoria TEXT NOT NULL);";
  rol: string = "CREATE TABLE IF NOT EXISTS rol(id_rol INTEGER PRIMARY KEY, nombre_rol TEXT NOT NULL);";
  pregunta: string = "CREATE TABLE IF NOT EXISTS pregunta(id_pregunta INTEGER PRIMARY KEY, nombre_pregunta TEXT NOT NULL);";
  consulta: string = "CREATE TABLE IF NOT EXISTS consulta(id_consulta INTEGER AUTOINCREMENT PRIMARY KEY, nombre_consultante TEXT NOT NULL, asunto_consulta TEXT NOT NULL, mensaje_consulta TEXT NOT NULL);";

  constructor() { }
}
