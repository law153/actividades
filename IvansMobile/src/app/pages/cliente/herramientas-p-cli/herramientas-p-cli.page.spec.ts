import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HerramientasPCliPage } from './herramientas-p-cli.page';

describe('HerramientasPCliPage', () => {
  let component: HerramientasPCliPage;
  let fixture: ComponentFixture<HerramientasPCliPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HerramientasPCliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
