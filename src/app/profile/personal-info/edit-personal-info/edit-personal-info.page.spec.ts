import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditPersonalInfoPage } from './edit-personal-info.page';

describe('EditPersonalInfoPage', () => {
  let component: EditPersonalInfoPage;
  let fixture: ComponentFixture<EditPersonalInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersonalInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
