import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarRolPage } from './editar-rol.page';

describe('EditarRolPage', () => {
  let component: EditarRolPage;
  let fixture: ComponentFixture<EditarRolPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarRolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
