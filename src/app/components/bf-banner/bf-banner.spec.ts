import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfBanner } from './bf-banner';

describe('BfBanner', () => {
  let component: BfBanner;
  let fixture: ComponentFixture<BfBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BfBanner],
    }).compileComponents();

    fixture = TestBed.createComponent(BfBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
