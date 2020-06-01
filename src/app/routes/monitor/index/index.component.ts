import { Component, OnInit, Inject } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { zip } from 'rxjs';
import { Monitor } from 'src/app/shared/domain/monitor';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DA_SERVICE_TOKEN } from '@delon/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monitor-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class MonitorIndexComponent implements OnInit {

  loading = false;
  count = {
    total: 0,
    // error
    success: 0,
    // success
    error: 0,
  }

  status = "all";
  origin: Monitor[];
  data: any[] = [];
  constructor(private http: _HttpClient, private msg: NzMessageService, @Inject(DA_SERVICE_TOKEN) private tokenService, private router: Router) { }

  ngOnInit() {

    this.getData();
  }

  getData() {
    this.loading = true;
    zip(this.http.get("/monitor"), this.http.get("/monitor/index")).subscribe(
      ([res, index]) => {
        this.loading = false;
        this.count.total = index.data.total;
        this.count.success = index.data.success;
        this.count.error = index.data.error;
        this.origin = res.data;
        this.data = this.updateList(this.origin);

      }
    )
  }

  updateList(list: Monitor[]): any[] {
    let rtv = [];
    list.forEach((m) => {
      let obj = {
        systemId: m.systemId,
        href: `#/resources/detial/${m.resourceId}`,
        localName: m.localName,
        owner: m.userName,
        time: m.time,
        logo: "http://assets.cwm.wiki/config/file.jpg",
        percent: 100,
        status: ''
      }

      if (m.status === 0) {
        obj.status = "exception"
      } else {
        obj.status = "success"
      }

      rtv.push(obj);
    })


    return rtv;
  }

  changeStatus(event) {
    let temp;
    switch (event) {
      case 'success':
        temp = this.origin.filter(item => item.status === 1);
        break;
      case 'error':
        temp = this.origin.filter(item => item.status === 0);
        break;
      default:
        this.getData();
        return;
    }
    this.data = this.updateList(temp);
  }

  update(item) {
    if (this.tokenService.get().type != 0) {
      this.router.navigate(['/exception/403']);
      return;
    }
    let obj = {
      systemId: item.systemId,
      status: 1
    }

    this.http.put("/monitor", obj).subscribe(res => {
      if (res.data != null) {
        this.msg.success("更新成功")
        this.getData();
      }
    })

  }

  delete(item) {
    if (this.tokenService.get().type != 0) {
      this.router.navigate(['/exception/403']);
      return;
    }
    this.http.delete(`/monitor/${item.systemId}`).subscribe(res => {
      if (res.data != null) {
        this.msg.success("删除成功")
        this.getData()
      }
    })
  }
}
