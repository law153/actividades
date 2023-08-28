import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FijacionesPPage } from './fijaciones-p.page';

describe('FijacionesPPage', () => {
  let component: FijacionesPPage;
  let fixture: ComponentFixture<FijacionesPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FijacionesPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
