import { Component, OnInit, Inject } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { Config } from 'src/app/shared/domain/config';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DA_SERVICE_TOKEN } from '@delon/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config-tencent',
  templateUrl: './tencent.component.html',
  styleUrls: ["./tencent.component.less"]
})
export class ConfigTencentComponent implements OnInit {
  loading = false;
  yun: any = {};
  constructor(private http: _HttpClient, private msg: NzMessageService, @Inject(DA_SERVICE_TOKEN) private tokenService, private router: Router) { }

  ngOnInit() {
    if (this.tokenService.get().type != 0) {
      this.router.navigate(['/exception/403']);
      return;
    }
    this.getData();
  }

  getData() {
    this.loading = true;
    this.http.get("/config/tencent").subscribe(
      res => {
        this.loading = false;
        this.yun = res.data;
      }
    )
  }

  save() {
    this.loading = true;
    let update = {
      "systemId": this.yun.systemId,
      "accessKey": this.yun.accessKey,
      "secretKey": this.yun.secretKey,
      "quota": this.yun.quota,
      "time": this.yun.time
    }
    this.http.put("/config", update).subscribe(
      res => {
        this.loading = false;
        if (res.data == true) {
          this.msg.success("更新成功");
          this.getData();
        } else {
          this.msg.success("更新失败")
        }
      }
    )
  }
}
