import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeguridadPAdmPage } from './seguridad-p-adm.page';

describe('SeguridadPAdmPage', () => {
  let component: SeguridadPAdmPage;
  let fixture: ComponentFixture<SeguridadPAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeguridadPAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
