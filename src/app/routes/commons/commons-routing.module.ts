import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonsUserComponent } from './user/user.component';

const routes: Routes = [

  { path: 'user', component: CommonsUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonsRoutingModule { }
