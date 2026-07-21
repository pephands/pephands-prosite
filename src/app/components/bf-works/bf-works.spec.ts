import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfWorks } from './bf-works';

describe('BfWorks', () => {
  let component: BfWorks;
  let fixture: ComponentFixture<BfWorks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BfWorks],
    }).compileComponents();

    fixture = TestBed.createComponent(BfWorks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
