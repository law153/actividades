import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RopaAdmPage } from './ropa-adm.page';

describe('RopaAdmPage', () => {
  let component: RopaAdmPage;
  let fixture: ComponentFixture<RopaAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RopaAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
