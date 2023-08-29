import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilAdmPage } from './perfil-adm.page';

describe('PerfilAdmPage', () => {
  let component: PerfilAdmPage;
  let fixture: ComponentFixture<PerfilAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
