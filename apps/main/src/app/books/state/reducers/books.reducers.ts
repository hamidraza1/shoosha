import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { BooksActions } from '../actions';

export interface State extends EntityState<Book> {
  loading: boolean;
}

export const featureName = 'books';
export interface Book {
  name: string;
}
export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  loading: false,
});

export const reducer = createReducer<State>(
  initialState,
  on(BooksActions.setLoading, (state, { loading }) => ({ ...state, loading })),
  on(BooksActions.addMany, (state, { books }) => adapter.addMany(books, state))
);

// get the selectors
const { selectAll } = adapter.getSelectors();

// select the dictionary of repo entities
export const selectBooksEntities = selectAll;
