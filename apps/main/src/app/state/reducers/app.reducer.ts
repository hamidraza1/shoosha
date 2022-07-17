import { createReducer, on } from '@ngrx/store';
import { AppActions } from '../actions';

export interface State {
  loading: boolean;
}

const initialState: State = {
  loading: false,
};

export const reducer = createReducer<State>(
  initialState,
  // avoid mutations
  on(AppActions.setLoading, (state, { loading }) => ({ ...state, loading }))
);
