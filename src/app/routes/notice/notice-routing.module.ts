import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticeListComponent } from './list/list.component';

const routes: Routes = [

  { path: '', component: NoticeListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticeRoutingModule { }
