import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromBooks from '../reducers/books.reducers';

// feature selector
export const selectBooksState = createFeatureSelector<fromBooks.State>(
  fromBooks.featureName
);

export const loading = createSelector(
  selectBooksState,
  (state) => state.loading
);

export const books = createSelector(
  selectBooksState,
  fromBooks.selectBooksEntities
);
