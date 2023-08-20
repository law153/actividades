import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElectricidadPAdmPage } from './electricidad-p-adm.page';

describe('ElectricidadPAdmPage', () => {
  let component: ElectricidadPAdmPage;
  let fixture: ComponentFixture<ElectricidadPAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElectricidadPAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
