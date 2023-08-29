import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CambiarContraAdmPage } from './cambiar-contra-adm.page';

describe('CambiarContraAdmPage', () => {
  let component: CambiarContraAdmPage;
  let fixture: ComponentFixture<CambiarContraAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CambiarContraAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
