import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  private correoUsuario = new BehaviorSubject<string>("");

  fetchCorreoSesion() {
    return this.correoUsuario.asObservable();
  }

  setCorreoSesion(correo: string) {
    this.correoUsuario.next(correo);
  }

  clearCorreoSesion() {
    this.correoUsuario.next("");
  }
  
  constructor() { }
}
