import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMedical } from './home-medical';

describe('HomeMedical', () => {
  let component: HomeMedical;
  let fixture: ComponentFixture<HomeMedical>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMedical],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeMedical);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
