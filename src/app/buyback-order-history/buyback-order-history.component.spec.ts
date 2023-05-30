import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuybackOrderHistoryComponent } from './buyback-order-history.component';

describe('BuybackOrderHistoryComponent', () => {
  let component: BuybackOrderHistoryComponent;
  let fixture: ComponentFixture<BuybackOrderHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuybackOrderHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuybackOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
