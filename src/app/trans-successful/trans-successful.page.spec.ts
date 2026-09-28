import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransSuccessfulPage } from './trans-successful.page';

describe('TransSuccessfulPage', () => {
  let component: TransSuccessfulPage;
  let fixture: ComponentFixture<TransSuccessfulPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TransSuccessfulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
