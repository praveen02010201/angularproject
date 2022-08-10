import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateScholarshipComponent } from './update-scholarship.component';

describe('UpdateScholarshipComponent', () => {
  let component: UpdateScholarshipComponent;
  let fixture: ComponentFixture<UpdateScholarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateScholarshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateScholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
