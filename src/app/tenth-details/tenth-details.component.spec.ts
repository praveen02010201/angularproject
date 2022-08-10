import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenthDetailsComponent } from './tenth-details.component';

describe('TenthDetailsComponent', () => {
  let component: TenthDetailsComponent;
  let fixture: ComponentFixture<TenthDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenthDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenthDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
