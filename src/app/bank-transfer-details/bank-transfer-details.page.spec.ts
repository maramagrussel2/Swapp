import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BankTransferDetailsPage } from './bank-transfer-details.page';

describe('BankTransferDetailsPage', () => {
  let component: BankTransferDetailsPage;
  let fixture: ComponentFixture<BankTransferDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BankTransferDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
