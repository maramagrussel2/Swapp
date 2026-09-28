import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginSessPage } from './login-sess.page';

describe('LoginSessPage', () => {
  let component: LoginSessPage;
  let fixture: ComponentFixture<LoginSessPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
