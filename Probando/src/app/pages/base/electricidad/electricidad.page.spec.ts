import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElectricidadPage } from './electricidad.page';

describe('ElectricidadPage', () => {
  let component: ElectricidadPage;
  let fixture: ComponentFixture<ElectricidadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElectricidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
