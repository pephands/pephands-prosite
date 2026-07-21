import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialdayDetail } from './specialday-detail';

describe('SpecialdayDetail', () => {
  let component: SpecialdayDetail;
  let fixture: ComponentFixture<SpecialdayDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialdayDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialdayDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
