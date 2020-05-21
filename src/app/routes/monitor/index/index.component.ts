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
      title: "test.png",
      href: '#',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/HrxcVbrKnCJOZvtzSqjN.png',
      subDescription: "访问超时",
      createdAt: "2018-10-10",
      owner: "admin",
      status: "success",
      percent: 100
    },
    {
      title: "test2.png",
      href: '#',
      logo: 'https://monitor-1251426495.oss-cn-beijing.aliyuncs.com/20200422203839_JD%E5%9B%BE%E7%89%87%E6%9C%AA%E5%8A%A0%E8%BD%BD.png',
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
