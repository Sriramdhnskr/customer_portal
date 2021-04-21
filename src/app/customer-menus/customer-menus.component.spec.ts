import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMenusComponent } from './customer-menus.component';

describe('CustomerMenusComponent', () => {
  let component: CustomerMenusComponent;
  let fixture: ComponentFixture<CustomerMenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
