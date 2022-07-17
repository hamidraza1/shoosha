import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppActions } from './state/actions';
import { GlobalState } from './state/reducers';
import { appSelectors } from './state/selectors';

@Component({
  selector: 'shoosha-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // never ever subscribe to selectors, use async pipe
  loading$ = this.store.select(appSelectors.loading);
  title = 'main';
  constructor(private store: Store<GlobalState>) {}

  ngOnInit() {
    this.store.dispatch(AppActions.setLoading({ loading: true }));
  }
}
