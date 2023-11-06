import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { EditarProdPage } from './editar-prod.page';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
describe('EditarProdPage', () => {
  let component: EditarProdPage;
  let fixture: ComponentFixture<EditarProdPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite],
      imports: [RouterTestingModule]
    }).compileComponents();
    fixture = TestBed.createComponent(EditarProdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
