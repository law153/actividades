import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniSesionPage } from './ini-sesion.page';

describe('IniSesionPage', () => {
  let component: IniSesionPage;
  let fixture: ComponentFixture<IniSesionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IniSesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
