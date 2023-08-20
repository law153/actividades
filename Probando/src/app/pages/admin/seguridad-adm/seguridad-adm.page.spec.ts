import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeguridadAdmPage } from './seguridad-adm.page';

describe('SeguridadAdmPage', () => {
  let component: SeguridadAdmPage;
  let fixture: ComponentFixture<SeguridadAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeguridadAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
