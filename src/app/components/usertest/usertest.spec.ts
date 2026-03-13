import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usertest } from './usertest';

describe('Usertest', () => {
  let component: Usertest;
  let fixture: ComponentFixture<Usertest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usertest],
    }).compileComponents();

    fixture = TestBed.createComponent(Usertest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
