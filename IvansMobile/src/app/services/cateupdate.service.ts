import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CateupdateService {

  private categoriaSeleccionada = new BehaviorSubject<number>(0);

  fetchCategoriaSeleccionada() {
    return this.categoriaSeleccionada.asObservable();
  }

  setCategoriaSeleccionada(idCategoria: number) {
    this.categoriaSeleccionada.next(idCategoria);
  }
  
  constructor() { }
}
