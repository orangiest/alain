import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ResourcesListComponent } from './list/list.component';
import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesDetailComponent } from './detial/detial.component';

const COMPONENTS = [
  ResourcesListComponent,
  ResourcesDetailComponent];
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
