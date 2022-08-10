import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteScholarshipComponent } from './delete-scholarship.component';

describe('DeleteScholarshipComponent', () => {
  let component: DeleteScholarshipComponent;
  let fixture: ComponentFixture<DeleteScholarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteScholarshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteScholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
