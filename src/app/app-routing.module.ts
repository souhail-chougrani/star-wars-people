import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/star-wars', pathMatch: 'full' },
  {
    path: 'star-wars',
    loadChildren: () => import('./star-wars/star-wars.module').then(m => m.StarWarsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

