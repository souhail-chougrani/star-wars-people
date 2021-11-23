import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarWarsResolver } from './services/star-wars.resolver';
import { StarWarsDetailComponent } from './star-wars-detail/star-wars-detail.component';
import { StarWarsComponent } from './star-wars/star-wars.component';

const routes: Routes = [
  { path: '', component: StarWarsComponent },
  { path: ':id', component: StarWarsDetailComponent, resolve: { detail: StarWarsResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarWarsRoutingModule { }

