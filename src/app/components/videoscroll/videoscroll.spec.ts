import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Videoscroll } from './videoscroll';

describe('Videoscroll', () => {
  let component: Videoscroll;
  let fixture: ComponentFixture<Videoscroll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Videoscroll],
    }).compileComponents();

    fixture = TestBed.createComponent(Videoscroll);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
