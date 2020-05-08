import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc/st';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-notice-list',
  templateUrl: './list.component.html',
})
export class NoticeListComponent implements OnInit {
  list: any[] = [
    {
      title: "测试公告",
      href: "http://www.baidu.com",
      owner: "admin",
      content: "测试公告",
      updatedAt: "2018-10-10"

    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper) { }

  ngOnInit() { }

}
