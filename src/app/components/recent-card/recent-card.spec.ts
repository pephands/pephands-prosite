import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentCard } from './recent-card';

describe('RecentCard', () => {
  let component: RecentCard;
  let fixture: ComponentFixture<RecentCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentCard],
    }).compileComponents();

    fixture = TestBed.createComponent(RecentCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
