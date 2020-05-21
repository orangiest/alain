import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {

  constructor(private http: _HttpClient) { }

  salesData: any[] = new Array(7).fill({}).map((_i, idx) => ({
    x: `${idx + 1}`,
    y: Math.floor(Math.random() * 1000) + 200,
    color: '#2194ff',
  }));

  noticeData: any[] = [
    {
      "title": "阿里云配置说明",
      "content": "点击查看详情"
    },
    {
      "title": "腾讯云配置说明",
      "content": "点击查看详情"
    },
    // {
    //   "title": "七牛云配置说明",
    //   "content": "点击查看详情"
    // }
  ]

  ngOnInit() {
  }

}
