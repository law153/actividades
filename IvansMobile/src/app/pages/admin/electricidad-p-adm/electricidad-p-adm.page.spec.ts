import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElectricidadAdmPPage } from './electricidad-p-adm.page';

describe('ElectricidadPAdmPage', () => {
  let component: ElectricidadAdmPPage;
  let fixture: ComponentFixture<ElectricidadAdmPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElectricidadAdmPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
