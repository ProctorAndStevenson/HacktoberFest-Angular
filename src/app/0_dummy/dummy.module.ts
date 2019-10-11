import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Components from './components';
import * as Containers from './containers';

@NgModule({
  declarations: [
      Components.BasicComponentComponent,
      Containers.HomePageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Containers.HomePageComponent
  ]
})
export class DummyModule { }
