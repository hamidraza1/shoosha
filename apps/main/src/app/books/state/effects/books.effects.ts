import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of, switchMap, tap } from 'rxjs';
import { GlobalState } from '../../../state/reducers';
import { BooksService } from '../../books.service';
import { BooksActions } from '../actions';

@Injectable()
export class BooksEffects {
  constructor(
    private actions$: Actions,
    private store: Store<GlobalState>,
    private booksService: BooksService
  ) {}

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.loadMany),
      tap(() => {
        return this.booksService.getBooks();
      }),
      switchMap(() => of(BooksActions.addMany({ books: [] })))
    )
  );
}
