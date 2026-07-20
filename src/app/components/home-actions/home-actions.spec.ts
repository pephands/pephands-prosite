import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeActions } from './home-actions';

describe('HomeActions', () => {
  let component: HomeActions;
  let fixture: ComponentFixture<HomeActions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeActions],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeActions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
