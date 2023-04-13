import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSolicitudComponent } from './vista-solicitud.component';

describe('VistaSolicitudComponent', () => {
  let component: VistaSolicitudComponent;
  let fixture: ComponentFixture<VistaSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaSolicitudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
