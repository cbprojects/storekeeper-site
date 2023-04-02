import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientQueryComponent } from './client-query.component';

describe('ClientQueryComponent', () => {
  let component: ClientQueryComponent;
  let fixture: ComponentFixture<ClientQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
