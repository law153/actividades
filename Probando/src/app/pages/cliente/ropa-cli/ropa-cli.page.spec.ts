import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RopaCliPage } from './ropa-cli.page';

describe('RopaCliPage', () => {
  let component: RopaCliPage;
  let fixture: ComponentFixture<RopaCliPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RopaCliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
