import { TestBed } from '@angular/core/testing';

import { MovieApiServiceService } from './movie-api.service';

describe('SeMovieApiServiceService', () => {
  let service: MovieApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
