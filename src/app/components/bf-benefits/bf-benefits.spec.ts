import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfBenefits } from './bf-benefits';

describe('BfBenefits', () => {
  let component: BfBenefits;
  let fixture: ComponentFixture<BfBenefits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BfBenefits],
    }).compileComponents();

    fixture = TestBed.createComponent(BfBenefits);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
