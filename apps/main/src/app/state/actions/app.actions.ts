import { createAction, props } from '@ngrx/store';

export const setLoading = createAction(
  '[App page] Set loading state',
  props<{ loading: boolean }>()
);
