import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactanosCliPage } from './contactanos-cli.page';

describe('ContactanosCliPage', () => {
  let component: ContactanosCliPage;
  let fixture: ComponentFixture<ContactanosCliPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContactanosCliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});