import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProgrammes } from './home-programmes';

describe('HomeProgrammes', () => {
  let component: HomeProgrammes;
  let fixture: ComponentFixture<HomeProgrammes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeProgrammes],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeProgrammes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
