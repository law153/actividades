import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FijacionesAdmPage } from './fijaciones-adm.page';

describe('FijacionesAdmPage', () => {
  let component: FijacionesAdmPage;
  let fixture: ComponentFixture<FijacionesAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FijacionesAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
