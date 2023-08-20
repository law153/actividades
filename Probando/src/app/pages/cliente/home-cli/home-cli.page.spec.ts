import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeCliPage } from './home-cli.page';

describe('HomeCliPage', () => {
  let component: HomeCliPage;
  let fixture: ComponentFixture<HomeCliPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeCliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
