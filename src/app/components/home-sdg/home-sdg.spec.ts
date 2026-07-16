import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSdg } from './home-sdg';

describe('HomeSdg', () => {
  let component: HomeSdg;
  let fixture: ComponentFixture<HomeSdg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSdg],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSdg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
