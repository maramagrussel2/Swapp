import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutSplashPage } from './about-splash.page';

describe('AboutSplashPage', () => {
  let component: AboutSplashPage;
  let fixture: ComponentFixture<AboutSplashPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSplashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
