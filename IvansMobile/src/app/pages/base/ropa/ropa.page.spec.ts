import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RopaPage } from './ropa.page';

describe('RopaPage', () => {
  let component: RopaPage;
  let fixture: ComponentFixture<RopaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RopaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
