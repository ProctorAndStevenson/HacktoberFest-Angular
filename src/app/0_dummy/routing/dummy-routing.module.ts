import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as Containers from './containers';
const routes: Routes = [
  // path: 'dummy',
  { path: '', component: Containers.HomePageComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// add routing for the page
export class AppRoutingModule { }
