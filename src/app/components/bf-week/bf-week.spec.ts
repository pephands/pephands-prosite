import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfWeek } from './bf-week';

describe('BfWeek', () => {
  let component: BfWeek;
  let fixture: ComponentFixture<BfWeek>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BfWeek],
    }).compileComponents();

    fixture = TestBed.createComponent(BfWeek);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
