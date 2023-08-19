import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeguridadPPage } from './seguridad-p.page';

describe('SeguridadPPage', () => {
  let component: SeguridadPPage;
  let fixture: ComponentFixture<SeguridadPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeguridadPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
