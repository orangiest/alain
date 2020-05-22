import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Config } from 'src/app/shared/domain/config';

@Component({
  selector: 'app-config-ali',
  templateUrl: './ali.component.html',
  styleUrls: ["./ali.component.less"]
})
export class ConfigAliComponent implements OnInit {
  date = null;
  loading = false;
  yun: any = {};
  constructor(private http: _HttpClient, private msg: NzMessageService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.http.get("/config/ali").subscribe(
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
