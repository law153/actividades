import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElectricidadPCliPage } from './electricidad-p-cli.page';

describe('ElectricidadPCliPage', () => {
  let component: ElectricidadPCliPage;
  let fixture: ComponentFixture<ElectricidadPCliPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElectricidadPCliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
