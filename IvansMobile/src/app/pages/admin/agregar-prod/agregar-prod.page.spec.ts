import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarProdPage } from './agregar-prod.page';

describe('AgregarProdPage', () => {
  let component: AgregarProdPage;
  let fixture: ComponentFixture<AgregarProdPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarProdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
