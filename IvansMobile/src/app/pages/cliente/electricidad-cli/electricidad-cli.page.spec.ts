import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElectricidadCliPage } from './electricidad-cli.page';

describe('ElectricidadCliPage', () => {
  let component: ElectricidadCliPage;
  let fixture: ComponentFixture<ElectricidadCliPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElectricidadCliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
