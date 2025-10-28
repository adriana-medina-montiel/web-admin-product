import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasPComponent } from './ventas-p.component';

describe('VentasPComponent', () => {
  let component: VentasPComponent;
  let fixture: ComponentFixture<VentasPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
