import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitDetailsComponent } from './submit-details.component';

describe('SubmitDetailsComponent', () => {
  let component: SubmitDetailsComponent;
  let fixture: ComponentFixture<SubmitDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
