import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer } from '@ngrx/store';

export interface State extends EntityState<Book> {
  loading: boolean;
}

export interface Book {
  name: string;
}
export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  loading: false,
});

export const reducer = createReducer<State>(initialState);
