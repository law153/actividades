import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GasfiteriaPPage } from './gasfiteria-p.page';

describe('GasfiteriaPPage', () => {
  let component: GasfiteriaPPage;
  let fixture: ComponentFixture<GasfiteriaPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GasfiteriaPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
