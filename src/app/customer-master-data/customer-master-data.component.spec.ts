import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMasterDataComponent } from './customer-master-data.component';

describe('CustomerMasterDataComponent', () => {
  let component: CustomerMasterDataComponent;
  let fixture: ComponentFixture<CustomerMasterDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMasterDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMasterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
