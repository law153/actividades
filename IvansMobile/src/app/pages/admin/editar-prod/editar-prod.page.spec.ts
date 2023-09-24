import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarProdPage } from './editar-prod.page';

describe('EditarProdPage', () => {
  let component: EditarProdPage;
  let fixture: ComponentFixture<EditarProdPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarProdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
