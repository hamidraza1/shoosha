import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalState } from '../state/reducers';
import { BooksService } from './books.service';
import { BooksActions } from './state/actions';

@Component({
  selector: 'shoosha-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  constructor(private store: Store<GlobalState>) {}

  ngOnInit() {
    this.store.dispatch(BooksActions.loadMany());
  }
}
