import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HerramientasAdmPage } from './herramientas-adm.page';

describe('HerramientasAdmPage', () => {
  let component: HerramientasAdmPage;
  let fixture: ComponentFixture<HerramientasAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HerramientasAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
