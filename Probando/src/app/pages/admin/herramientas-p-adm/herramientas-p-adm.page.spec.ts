import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HerramientasPAdmPage } from './herramientas-p-adm.page';

describe('HerramientasPAdmPage', () => {
  let component: HerramientasPAdmPage;
  let fixture: ComponentFixture<HerramientasPAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HerramientasPAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
