import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KitsPPage } from './kits-p.page';

describe('KitsPPage', () => {
  let component: KitsPPage;
  let fixture: ComponentFixture<KitsPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KitsPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
