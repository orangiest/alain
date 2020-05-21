import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-setting-index',
  templateUrl: './index.component.html',
  styleUrls: ["./index.component.less"]
})
export class SettingIndexComponent implements OnInit {
  loading = false;
  user = {
    email: "admin@qq.com",
    name: "admin",
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
  }
  password: any = {
    old: '',
    new: '',
  }
  constructor(private http: _HttpClient) { }

  ngOnInit() { }

  save() { }
}
