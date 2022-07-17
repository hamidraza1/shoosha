import { createAction, props } from '@ngrx/store';
import { Book } from '../reducers/books.reducers';

export const setLoading = createAction(
  '[Books] Set loading state',
  props<{ loading: boolean }>()
);

export const addMany = createAction(
  '[Books] Add Many Books',
  props<{ books: Book[] }>()
);

export const loadMany = createAction('[Books] Load Many Books');
