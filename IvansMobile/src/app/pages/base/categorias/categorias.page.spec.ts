import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { CategoriasPage } from './categorias.page';
import { ActivatedRoute } from '@angular/router';

describe('CategoriasPage', () => {
  let component: CategoriasPage;
  let fixture: ComponentFixture<CategoriasPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite, ActivatedRoute],
      
    }).compileComponents();
    fixture = TestBed.createComponent(CategoriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
