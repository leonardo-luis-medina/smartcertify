import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Databindings } from './databindings';

describe('Databindings', () => {
  let component: Databindings;
  let fixture: ComponentFixture<Databindings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Databindings],
    }).compileComponents();

    fixture = TestBed.createComponent(Databindings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
