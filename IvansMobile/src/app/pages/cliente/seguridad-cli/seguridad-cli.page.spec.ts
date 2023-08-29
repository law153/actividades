import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeguridadCliPage } from './seguridad-cli.page';

describe('SeguridadCliPage', () => {
  let component: SeguridadCliPage;
  let fixture: ComponentFixture<SeguridadCliPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeguridadCliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
