import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebitCreditCardPage } from './debit-credit-card.page';

describe('DebitCreditCardPage', () => {
  let component: DebitCreditCardPage;
  let fixture: ComponentFixture<DebitCreditCardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitCreditCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
