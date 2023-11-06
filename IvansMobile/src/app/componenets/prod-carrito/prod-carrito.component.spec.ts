import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProdCarritoComponent } from './prod-carrito.component';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('ProdCarritoComponent', () => {
  let component: ProdCarritoComponent;
  let fixture: ComponentFixture<ProdCarritoComponent>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdCarritoComponent ],
      imports: [IonicModule.forRoot()],
      providers: [SQLite]
    }).compileComponents();

    fixture = TestBed.createComponent(ProdCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
