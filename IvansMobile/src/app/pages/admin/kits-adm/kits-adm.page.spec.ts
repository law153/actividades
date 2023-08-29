import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KitsAdmPage } from './kits-adm.page';

describe('KitsAdmPage', () => {
  let component: KitsAdmPage;
  let fixture: ComponentFixture<KitsAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KitsAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
