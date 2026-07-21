import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfInitiative } from './bf-initiative';

describe('BfInitiative', () => {
  let component: BfInitiative;
  let fixture: ComponentFixture<BfInitiative>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BfInitiative],
    }).compileComponents();

    fixture = TestBed.createComponent(BfInitiative);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
