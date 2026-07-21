import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfOverview } from './bf-overview';

describe('BfOverview', () => {
  let component: BfOverview;
  let fixture: ComponentFixture<BfOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BfOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(BfOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
