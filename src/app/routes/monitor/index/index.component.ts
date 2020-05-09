import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-monitor-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class MonitorIndexComponent implements OnInit {
  q: any = {
    status: 'all',
  };

  data: any[] = [
    {
      title: "test",
      href: '#',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/HrxcVbrKnCJOZvtzSqjN.png',
      subDescription: "访问超时",
      createdAt: "2018-10-10",
      owner: "admin",
      status: "exception",
      percent: 100
    }

  ]
  constructor(private http: _HttpClient) { }

  ngOnInit() { }

}
