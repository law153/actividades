import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiexternaService {
  private apiURL = 'https://api.apilayer.com/fixer/convert';
  private apiKey = 'oeiuPfL8lQdgIrOht3Vt03aZh3uG83Al';

  constructor(private http: HttpClient) { }

  convertCurrency(from: string, to: string, amount: number): Observable<any> {
    // Construye la URL con parámetros
    const url = `${this.apiURL}?from=${from}&to=${to}&amount=${amount}`;

    // Define las cabeceras con la clave API
    const httpOptions = {
      headers: new HttpHeaders({
        'apikey': this.apiKey
      })
    };

    return this.http.get(url, httpOptions);
  }
}
