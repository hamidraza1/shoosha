import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BooksService } from './books.service';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './state/effects/books.effects';
import { StoreModule } from '@ngrx/store';
import * as fromBooks from './state/reducers/books.reducers';

@NgModule({
  declarations: [BooksComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    StoreModule.forFeature(fromBooks.featureName, fromBooks.reducer),
    EffectsModule.forFeature([BooksEffects]),
  ],
  providers: [BooksService],
})
export class BooksModule {}
