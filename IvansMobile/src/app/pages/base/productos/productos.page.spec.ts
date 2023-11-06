import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { ProductosPage } from './productos.page';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";

describe('ProductosPage', () => {
  let component: ProductosPage;
  let fixture: ComponentFixture<ProductosPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite],
      imports: [RouterTestingModule]
    }).compileComponents();
    fixture = TestBed.createComponent(ProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
