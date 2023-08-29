import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoPedidoPage } from './listado-pedido.page';

describe('ListadoPedidoPage', () => {
  let component: ListadoPedidoPage;
  let fixture: ComponentFixture<ListadoPedidoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListadoPedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
