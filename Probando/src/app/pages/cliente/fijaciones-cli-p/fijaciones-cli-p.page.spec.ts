import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FijacionesCliPPage } from './fijaciones-cli-p.page';

describe('FijacionesCliPPage', () => {
  let component: FijacionesCliPPage;
  let fixture: ComponentFixture<FijacionesCliPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FijacionesCliPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
