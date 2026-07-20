import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGiveinkind } from './home-giveinkind';

describe('HomeGiveinkind', () => {
  let component: HomeGiveinkind;
  let fixture: ComponentFixture<HomeGiveinkind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeGiveinkind],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeGiveinkind);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
