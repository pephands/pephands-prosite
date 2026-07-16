import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePartners } from './home-partners';

describe('HomePartners', () => {
  let component: HomePartners;
  let fixture: ComponentFixture<HomePartners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePartners],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePartners);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
