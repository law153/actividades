import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GasfiteriaPage } from './gasfiteria.page';

describe('GasfiteriaPage', () => {
  let component: GasfiteriaPage;
  let fixture: ComponentFixture<GasfiteriaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GasfiteriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
