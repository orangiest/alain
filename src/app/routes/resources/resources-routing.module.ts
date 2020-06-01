import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourcesListComponent } from './list/list.component';
import { ResourcesDetailComponent } from './detial/detial.component';

const routes: Routes = [
  { path: '', component: ResourcesListComponent },
  { path: 'detial/:systemId', component: ResourcesDetailComponent }

  ,];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
