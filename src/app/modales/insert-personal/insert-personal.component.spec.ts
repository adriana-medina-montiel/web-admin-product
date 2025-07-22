import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPersonalComponent } from './insert-personal.component';

describe('InsertPersonalComponent', () => {
  let component: InsertPersonalComponent;
  let fixture: ComponentFixture<InsertPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertPersonalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
