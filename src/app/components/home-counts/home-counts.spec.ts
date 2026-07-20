import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCounts } from './home-counts';

describe('HomeCounts', () => {
  let component: HomeCounts;
  let fixture: ComponentFixture<HomeCounts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCounts],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCounts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
