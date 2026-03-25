import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetExamFeddbackAndSubmit } from './get-exam-feddback-and-submit';

describe('GetExamFeddbackAndSubmit', () => {
  let component: GetExamFeddbackAndSubmit;
  let fixture: ComponentFixture<GetExamFeddbackAndSubmit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetExamFeddbackAndSubmit],
    }).compileComponents();

    fixture = TestBed.createComponent(GetExamFeddbackAndSubmit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
