import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromApp from './app.reducer';
import * as fromBooks from '../../books/state/reducers/books.reducers';

export interface GlobalState {
  app: fromApp.State;
  books: fromBooks.State;
}

export const reducers: ActionReducerMap<GlobalState> = {
  app: fromApp.reducer,
  books: fromBooks.reducer,
};

export const metaReducers: MetaReducer<GlobalState>[] = [];
