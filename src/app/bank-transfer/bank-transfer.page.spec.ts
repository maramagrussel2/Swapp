import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BankTransferPage } from './bank-transfer.page';

describe('BankTransferPage', () => {
  let component: BankTransferPage;
  let fixture: ComponentFixture<BankTransferPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BankTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
