import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HerramientasCliPage } from './herramientas-cli.page';

describe('HerramientasCliPage', () => {
  let component: HerramientasCliPage;
  let fixture: ComponentFixture<HerramientasCliPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HerramientasCliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
