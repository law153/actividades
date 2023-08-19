import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RopaPPage } from './ropa-p.page';

describe('RopaPPage', () => {
  let component: RopaPPage;
  let fixture: ComponentFixture<RopaPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RopaPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
