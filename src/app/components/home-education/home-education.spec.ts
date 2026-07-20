import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEducation } from './home-education';

describe('HomeEducation', () => {
  let component: HomeEducation;
  let fixture: ComponentFixture<HomeEducation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeEducation],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeEducation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
