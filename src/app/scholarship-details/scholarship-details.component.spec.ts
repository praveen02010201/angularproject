import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipDetailsComponent } from './scholarship-details.component';

describe('ScholarshipDetailsComponent', () => {
  let component: ScholarshipDetailsComponent;
  let fixture: ComponentFixture<ScholarshipDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScholarshipDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarshipDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
