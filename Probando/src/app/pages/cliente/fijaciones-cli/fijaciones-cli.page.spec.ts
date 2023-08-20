import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FijacionesCliPage } from './fijaciones-cli.page';

describe('FijacionesCliPage', () => {
  let component: FijacionesCliPage;
  let fixture: ComponentFixture<FijacionesCliPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FijacionesCliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
