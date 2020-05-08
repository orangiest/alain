import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { NoticeRoutingModule } from './notice-routing.module';
import { NoticeListComponent } from './list/list.component';

const COMPONENTS = [
  NoticeListComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    NoticeRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
})
export class NoticeModule { }
