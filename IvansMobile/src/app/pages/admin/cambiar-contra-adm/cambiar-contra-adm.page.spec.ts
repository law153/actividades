import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { CambiarContraAdmPage } from './cambiar-contra-adm.page';

describe('CambiarContraAdmPage', () => {
  let component: CambiarContraAdmPage;
  let fixture: ComponentFixture<CambiarContraAdmPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(CambiarContraAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
