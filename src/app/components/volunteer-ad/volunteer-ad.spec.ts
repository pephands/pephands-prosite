import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerAd } from './volunteer-ad';

describe('VolunteerAd', () => {
  let component: VolunteerAd;
  let fixture: ComponentFixture<VolunteerAd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteerAd],
    }).compileComponents();

    fixture = TestBed.createComponent(VolunteerAd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
