import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfDistribution } from './bf-distribution';

describe('BfDistribution', () => {
  let component: BfDistribution;
  let fixture: ComponentFixture<BfDistribution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BfDistribution],
    }).compileComponents();

    fixture = TestBed.createComponent(BfDistribution);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
