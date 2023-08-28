import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, ToastController, Animation, AnimationController, IonGrid } from '@ionic/angular';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {
  @ViewChild('miIonGrid', { read: ElementRef }) miIonGrid!: ElementRef;;

  constructor(private router: Router, private animationCtrl: AnimationController, private menuCtrl: MenuController ) { }

  ionViewDidEnter() {
    this.ejecutarAnimacion();
  }

  async ejecutarAnimacion() {
    const animation = this.animationCtrl.create()
      .addElement(this.miIonGrid.nativeElement)
      .duration(1000)
      .easing('ease-out')
      .beforeStyles({ transform: 'rotate(0) translateX(0)' })
      .fromTo('transform', 'rotate(0) translateX(0)', 'rotate(-15deg) translateX(-50px)');

    await animation.play();
  }

  irHome(){
    this.router.navigate([''])    
  }

  abrirSuperior(){
    this.menuCtrl.enable(true, 'superior');
    this.menuCtrl.open('superior');
  }

  abrirCategorias(){
    this.menuCtrl.enable(true, 'categorias');
    this.menuCtrl.open('categorias');
  }

  ngOnInit() {
  }

}
