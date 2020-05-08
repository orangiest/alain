import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './list/list.component';
import { UsersListEditComponent } from './list/edit/edit.component';
import { UsersListViewComponent } from './list/view/view.component';

const COMPONENTS = [
  UsersListComponent];
const COMPONENTS_NOROUNT = [
  UsersListEditComponent,
  UsersListViewComponent];

@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
})
export class UsersModule { }
