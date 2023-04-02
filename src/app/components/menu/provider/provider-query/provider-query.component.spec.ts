import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderQueryComponent } from './provider-query.component';

describe('ProviderQueryComponent', () => {
  let component: ProviderQueryComponent;
  let fixture: ComponentFixture<ProviderQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
