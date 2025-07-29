import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutaSesionComponent } from './minuta-sesion.component';

describe('MinutaSesionComponent', () => {
  let component: MinutaSesionComponent;
  let fixture: ComponentFixture<MinutaSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinutaSesionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinutaSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
