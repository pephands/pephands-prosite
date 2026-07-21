import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marathongallery2026 } from './marathongallery-2026';

describe('Marathongallery2026', () => {
  let component: Marathongallery2026;
  let fixture: ComponentFixture<Marathongallery2026>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Marathongallery2026],
    }).compileComponents();

    fixture = TestBed.createComponent(Marathongallery2026);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
