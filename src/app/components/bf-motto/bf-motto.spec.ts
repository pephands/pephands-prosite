import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfMotto } from './bf-motto';

describe('BfMotto', () => {
  let component: BfMotto;
  let fixture: ComponentFixture<BfMotto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BfMotto],
    }).compileComponents();

    fixture = TestBed.createComponent(BfMotto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
