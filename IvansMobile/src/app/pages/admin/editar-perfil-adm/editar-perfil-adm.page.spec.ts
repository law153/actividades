import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarPerfilAdmPage } from './editar-perfil-adm.page';

describe('EditarPerfilAdmPage', () => {
  let component: EditarPerfilAdmPage;
  let fixture: ComponentFixture<EditarPerfilAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarPerfilAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
