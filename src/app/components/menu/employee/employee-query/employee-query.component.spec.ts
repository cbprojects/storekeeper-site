import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeQueryComponent } from './employee-query.component';

describe('EmployeeQueryComponent', () => {
  let component: EmployeeQueryComponent;
  let fixture: ComponentFixture<EmployeeQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeQueryComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EmployeeQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
