import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private detallesSubject = new BehaviorSubject<any[]>([]);
  detalles$ = this.detallesSubject.asObservable();
  
  

  actualizarDetalles(detalles: any[]) {
    this.detallesSubject.next(detalles);
  }
}
