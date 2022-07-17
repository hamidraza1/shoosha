import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromApp from './app.reducer';

export interface GlobalState {
  app: fromApp.State;
}

export const reducers: ActionReducerMap<GlobalState> = {
  app: fromApp.reducer,
};

export const metaReducers: MetaReducer<GlobalState>[] = [];
