import { createReducer } from '@ngrx/store';

export interface State {
  books: Book[];
}

export interface Book {
  name: string;
}

const initialState: State = {
  books: [],
};

export const reducer = createReducer<State>(initialState);
