import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OlvContraPage } from './olv-contra.page';

describe('OlvContraPage', () => {
  let component: OlvContraPage;
  let fixture: ComponentFixture<OlvContraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OlvContraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
