import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelthDetailsComponent } from './twelth-details.component';

describe('TwelthDetailsComponent', () => {
  let component: TwelthDetailsComponent;
  let fixture: ComponentFixture<TwelthDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwelthDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwelthDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
