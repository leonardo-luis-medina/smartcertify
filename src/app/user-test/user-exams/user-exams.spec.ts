import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExams } from './user-exams';

describe('UserExams', () => {
  let component: UserExams;
  let fixture: ComponentFixture<UserExams>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserExams],
    }).compileComponents();

    fixture = TestBed.createComponent(UserExams);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
