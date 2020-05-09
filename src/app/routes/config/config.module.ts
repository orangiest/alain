import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ConfigRoutingModule } from './config-routing.module';
import { ConfigIndexComponent } from './index/index.component';
import { ConfigAliComponent } from './ali/ali.component';
import { ConfigTencentComponent } from './tencent/tencent.component';
import { ConfigQiniuComponent } from './qiniu/qiniu.component';

const COMPONENTS = [
  ConfigIndexComponent,
  ConfigAliComponent,
  ConfigTencentComponent,
  ConfigQiniuComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    ConfigRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
})
export class ConfigModule { }
