import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  constructor(private menuCtrl: MenuController, private router: Router) { }

  irHome(){
    this.router.navigate([''])
  }

  ngOnInit() {
  }

}
