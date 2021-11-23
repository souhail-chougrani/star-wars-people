import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarWarsRoutingModule } from './star-wars-routing.module';
import { SharedModule } from '../shared/shared.module';

// components
import { StarWarsComponent } from './star-wars/star-wars.component';
import { StarWarsListComponent } from './star-wars-list/star-war-list.component';
import { StarWarsFilterComponent } from './star-wars-filter/star-wars-filter.component';
import { StarWarsDetailComponent } from './star-wars-detail/star-wars-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StarWarsComponent,
    StarWarsListComponent,
    StarWarsFilterComponent,
    StarWarsDetailComponent
  ],
  imports: [
    CommonModule,
    StarWarsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class StarWarsModule { }
