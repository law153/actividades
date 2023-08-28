import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FijacionesAdmPPage } from './fijaciones-adm-p.page';

describe('FijacionesAdmPPage', () => {
  let component: FijacionesAdmPPage;
  let fixture: ComponentFixture<FijacionesAdmPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FijacionesAdmPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
