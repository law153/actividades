import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermisosService {

  private permisosUser = new BehaviorSubject<number>(0);

  Rol = this.permisosUser.asObservable();

  setUserRole(role: number) {
    this.permisosUser.next(role);
    localStorage.setItem('userRol', role.toString());
  }

  constructor() {
    const storedUserRol = localStorage.getItem('userRol');
    if (storedUserRol) {
      this.permisosUser.next(parseInt(storedUserRol, 10));
    }

   }

   
}
