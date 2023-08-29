import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HerramientasPPage } from './herramientas-p.page';

describe('HerramientasPPage', () => {
  let component: HerramientasPPage;
  let fixture: ComponentFixture<HerramientasPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HerramientasPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
