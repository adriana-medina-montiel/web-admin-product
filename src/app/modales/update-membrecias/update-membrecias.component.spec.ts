import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMembreciasComponent } from './update-membrecias.component';

describe('UpdateMembreciasComponent', () => {
  let component: UpdateMembreciasComponent;
  let fixture: ComponentFixture<UpdateMembreciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateMembreciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMembreciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
