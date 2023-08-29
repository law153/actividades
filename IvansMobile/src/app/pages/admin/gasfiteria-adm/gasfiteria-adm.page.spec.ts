import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GasfiteriaAdmPage } from './gasfiteria-adm.page';

describe('GasfiteriaAdmPage', () => {
  let component: GasfiteriaAdmPage;
  let fixture: ComponentFixture<GasfiteriaAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GasfiteriaAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
