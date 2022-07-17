import { createSelector } from '@ngrx/store';
import { GlobalState } from '../reducers';

const selectAppState = (state: GlobalState) => state.app;

export const loading = createSelector(selectAppState, (state) => state.loading);
