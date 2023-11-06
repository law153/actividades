import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { AgregarProdPage } from './agregar-prod.page';

describe('AgregarProdPage', () => {
  let component: AgregarProdPage;
  let fixture: ComponentFixture<AgregarProdPage>;

  beforeEach(async() => {

    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    
    fixture = TestBed.createComponent(AgregarProdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
