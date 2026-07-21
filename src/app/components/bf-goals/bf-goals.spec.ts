import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfGoals } from './bf-goals';

describe('BfGoals', () => {
  let component: BfGoals;
  let fixture: ComponentFixture<BfGoals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BfGoals],
    }).compileComponents();

    fixture = TestBed.createComponent(BfGoals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
