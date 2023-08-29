import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KitsCliPage } from './kits-cli.page';

describe('KitsCliPage', () => {
  let component: KitsCliPage;
  let fixture: ComponentFixture<KitsCliPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KitsCliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
