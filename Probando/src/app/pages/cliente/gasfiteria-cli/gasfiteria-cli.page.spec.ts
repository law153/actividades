import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GasfiteriaCliPage } from './gasfiteria-cli.page';

describe('GasfiteriaCliPage', () => {
  let component: GasfiteriaCliPage;
  let fixture: ComponentFixture<GasfiteriaCliPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GasfiteriaCliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
