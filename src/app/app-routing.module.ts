import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as Containers from './core/containers';


const routes: Routes = [
  { path: '', component: Containers.HomePageComponent},
  { path: 'dummy', loadChildren: './0_dummy/dummy.module#DummyModule' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// add routing for the page
export class AppRoutingModule { }
