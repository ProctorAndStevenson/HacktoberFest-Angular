import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as Components from './components';
import * as Containers from './containers';
import {DummyRoutingModule} from './routing/dummy-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [
        Components.BasicComponentComponent,
        Containers.HomePageComponent,
    ],
    imports: [
        CommonModule,
        DummyRoutingModule,
        SharedModule,
    ],
    exports: [
        Containers.HomePageComponent
    ],
    // bootstrap: [Containers.HomePageComponent]
})
export class DummyModule {
}
