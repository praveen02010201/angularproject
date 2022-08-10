import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectScholarshipComponent } from './select-scholarship.component';

describe('SelectScholarshipComponent', () => {
  let component: SelectScholarshipComponent;
  let fixture: ComponentFixture<SelectScholarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectScholarshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectScholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
