import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertProdcutosComponent } from './insert-prodcutos.component';

describe('InsertProdcutosComponent', () => {
  let component: InsertProdcutosComponent;
  let fixture: ComponentFixture<InsertProdcutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertProdcutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertProdcutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
