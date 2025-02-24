import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueTradeComponent } from './value-trade.component';

describe('ValueTradeComponent', () => {
  let component: ValueTradeComponent;
  let fixture: ComponentFixture<ValueTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValueTradeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
