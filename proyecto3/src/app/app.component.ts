import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}
  irHome(){

    this.router.navigate([''])
    
  }
  irPagina1(){

    this.router.navigate(['/pagina1'])
    
  }
}
