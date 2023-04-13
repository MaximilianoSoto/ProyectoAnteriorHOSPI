import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarSuplenciaComponent } from './ingresar-suplencia.component';

describe('IngresarSuplenciaComponent', () => {
  let component: IngresarSuplenciaComponent;
  let fixture: ComponentFixture<IngresarSuplenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarSuplenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarSuplenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
