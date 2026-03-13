import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Databindingslatest } from './databindingslatest';

describe('Databindingslatest', () => {
  let component: Databindingslatest;
  let fixture: ComponentFixture<Databindingslatest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Databindingslatest],
    }).compileComponents();

    fixture = TestBed.createComponent(Databindingslatest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
