import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { VerCompraPage } from './ver-compra.page';
import { ActivatedRoute } from '@angular/router';

describe('VerCompraPage', () => {
  let component: VerCompraPage;
  let fixture: ComponentFixture<VerCompraPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(VerCompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
