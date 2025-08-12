import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertMembreciaComponent } from './insert-membrecia.component';

describe('InsertMembreciaComponent', () => {
  let component: InsertMembreciaComponent;
  let fixture: ComponentFixture<InsertMembreciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertMembreciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertMembreciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
