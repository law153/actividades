import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeguridadPCliPage } from './seguridad-p-cli.page';

describe('SeguridadPCliPage', () => {
  let component: SeguridadPCliPage;
  let fixture: ComponentFixture<SeguridadPCliPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeguridadPCliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
