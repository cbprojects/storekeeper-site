import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryQueryComponent } from './product-category-query.component';

describe('ProductCategoryQueryComponent', () => {
  let component: ProductCategoryQueryComponent;
  let fixture: ComponentFixture<ProductCategoryQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategoryQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCategoryQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
