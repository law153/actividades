import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElectricidadAdmPage } from './electricidad-adm.page';

describe('ElectricidadAdmPage', () => {
  let component: ElectricidadAdmPage;
  let fixture: ComponentFixture<ElectricidadAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElectricidadAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
