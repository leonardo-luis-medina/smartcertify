import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartExams } from './start-exams';

describe('StartExams', () => {
  let component: StartExams;
  let fixture: ComponentFixture<StartExams>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartExams],
    }).compileComponents();

    fixture = TestBed.createComponent(StartExams);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
