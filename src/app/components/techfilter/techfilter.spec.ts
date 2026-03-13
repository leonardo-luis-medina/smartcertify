import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Techfilter } from './techfilter';

describe('Techfilter', () => {
  let component: Techfilter;
  let fixture: ComponentFixture<Techfilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Techfilter],
    }).compileComponents();

    fixture = TestBed.createComponent(Techfilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
