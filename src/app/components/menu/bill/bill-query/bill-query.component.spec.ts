import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillQueryComponent } from './bill-query.component';

describe('BillQueryComponent', () => {
  let component: BillQueryComponent;
  let fixture: ComponentFixture<BillQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
