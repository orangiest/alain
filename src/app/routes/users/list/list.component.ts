import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { UsersListEditComponent } from './edit/edit.component';
import { UsersListViewComponent } from './view/view.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './list.component.html',
})
export class UsersListComponent implements OnInit {
  url = `/user`;
  searchSchema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '编号'
      }
    }
  };
  @ViewChild('st', { static: false }) st: STComponent;
  columns: STColumn[] = [
    { title: '编号', index: 'no' },
    { title: '用户名', type: 'number', index: 'callNo' },
    { title: '头像', type: 'img', width: '50px', index: 'avatar' },
    { title: '修改时间', type: 'date', index: 'updatedAt' },
    {
      title: '操作',
      buttons: [
        // { text: '查看', type: 'modal', component: UsersListViewComponent, click: (_record, modal) => console.log(`重新加载页面，回传值：${JSON.stringify(modal)}`) },
        {
          text: '编辑',
          icon: 'edit',
          type: 'modal',
          modal: {
            component: UsersListEditComponent,
          },
          click: (_record, modal) => console.log(`重新加载页面，回传值：${JSON.stringify(modal)}`),
        },
        // { text: '查看', click: (item: any) => `/form/${item.id}` },
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper) { }

  ngOnInit() { }

  add() {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }

}
