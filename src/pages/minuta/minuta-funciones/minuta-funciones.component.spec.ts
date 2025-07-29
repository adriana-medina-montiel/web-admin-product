import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutaFuncionesComponent } from './minuta-funciones.component';

describe('MinutaFuncionesComponent', () => {
  let component: MinutaFuncionesComponent;
  let fixture: ComponentFixture<MinutaFuncionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinutaFuncionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinutaFuncionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
