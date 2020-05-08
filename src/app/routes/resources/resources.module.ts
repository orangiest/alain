import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ResourcesListComponent } from './list/list.component';
import { ResourcesRoutingModule } from './resources-routing.module';

const COMPONENTS = [
  ResourcesListComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    ResourcesRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
})
export class ResourcesModule { }
