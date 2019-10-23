import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatTableModule,
  MatCardModule,
  MatButtonModule,
} from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { CalculatingTableComponent } from './components/calculating-table/calculating-table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    WebviewDirective,
    CalculatingTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    TranslateModule,
    WebviewDirective,
    CalculatingTableComponent
  ]
})
export class SharedModule {}
