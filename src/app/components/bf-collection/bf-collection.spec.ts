import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfCollection } from './bf-collection';

describe('BfCollection', () => {
  let component: BfCollection;
  let fixture: ComponentFixture<BfCollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BfCollection],
    }).compileComponents();

    fixture = TestBed.createComponent(BfCollection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
