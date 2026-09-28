import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransferReviewPage } from './transfer-review.page';

describe('TransferReviewPage', () => {
  let component: TransferReviewPage;
  let fixture: ComponentFixture<TransferReviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
