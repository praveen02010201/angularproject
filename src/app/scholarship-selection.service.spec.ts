import { TestBed } from '@angular/core/testing';

import { ScholarshipSelectionService } from './scholarship-selection.service';

describe('ScholarshipSelectionService', () => {
  let service: ScholarshipSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScholarshipSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
