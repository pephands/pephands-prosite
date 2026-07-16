import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRecentevents } from './home-recentevents';

describe('HomeRecentevents', () => {
  let component: HomeRecentevents;
  let fixture: ComponentFixture<HomeRecentevents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeRecentevents],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeRecentevents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
