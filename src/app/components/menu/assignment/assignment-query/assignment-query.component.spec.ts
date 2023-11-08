import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentQueryComponent } from './assignment-query.component';

describe('AssignmentQueryComponent', () => {
  let component: AssignmentQueryComponent;
  let fixture: ComponentFixture<AssignmentQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignmentQueryComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AssignmentQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
