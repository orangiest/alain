import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigIndexComponent } from './index/index.component';
import { ConfigAliComponent } from './ali/ali.component';
import { ConfigTencentComponent } from './tencent/tencent.component';
import { ConfigQiniuComponent } from './qiniu/qiniu.component';

const routes: Routes = [

  { path: '', component: ConfigIndexComponent },
  { path: 'ali', component: ConfigAliComponent },
  { path: 'tencent', component: ConfigTencentComponent },
  { path: 'qiniu', component: ConfigQiniuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
