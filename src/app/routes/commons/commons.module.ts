import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { CommonsRoutingModule } from './commons-routing.module';
import { CommonsUserEditComponent } from './user/edit/edit.component';
import { CommonsUserComponent } from './user/user.component';
import { CommonsUserViewComponent } from './user/view/view.component';

const COMPONENTS = [
  CommonsUserComponent];
const COMPONENTS_NOROUNT = [
  CommonsUserEditComponent,
  CommonsUserViewComponent];

@NgModule({
  imports: [
    SharedModule,
    CommonsRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
})
export class CommonsModule { }
