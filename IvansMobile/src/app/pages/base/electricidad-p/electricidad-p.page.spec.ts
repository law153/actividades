import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElectricidadPPage } from './electricidad-p.page';

describe('ElectricidadPPage', () => {
  let component: ElectricidadPPage;
  let fixture: ComponentFixture<ElectricidadPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElectricidadPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
