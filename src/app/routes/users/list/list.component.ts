import { Component, OnInit, ViewChild, TemplateRef, Inject } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { UsersListEditComponent } from './edit/edit.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { User } from 'src/app/shared/domain/user';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DA_SERVICE_TOKEN, TokenService } from '@delon/auth';


@Component({
  selector: 'app-users-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class UsersListComponent implements OnInit {
  // userDara = `/user`;
  username: string;
  password: string;
  nickname: string;
  email: string;
  type: number;
  loading = false;
  userData: User[] = [];
  searchSchema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '用户ID'
      }
    }
  };
  @ViewChild('st', { static: false }) st: STComponent;
  columns: STColumn[] = [
    { title: '用户ID', width: '10%', index: 'systemId' },
    { title: '用户名', width: '20%', index: 'username' },
    { title: '昵称', width: '20%', index: 'nickname' },
    { title: '角色身份', width: '20%', index: 'type' },
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
          click: (record, modal) => this.getData(),
        },
        {
          text: '删除',
          icon: 'delete',
          type: 'del',
          pop: {
            title: '是否删除？',
            okType: 'danger'
          },
          click: (record, _modal, st) => {
            this.http.delete(`/user/${record.systemId}`).subscribe(
              res => {
                if (res.code === 0) {
                  this.msg.success(`成功删除【${record.username}】`);
                }
              }
            )
            st!.removeRow(record);
          }
        },
        // { text: '查看', click: (item: any) => `/form/${item.id}` },
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper, private modalSrv: NzModalService, private msg: NzMessageService, @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService) { }

  ngOnInit() {
    this.getData();
  }

  createMessage(type: string, content: string): void {
    this.msg.create(type, `${content}`);
  }

  getData() {
    this.loading = true;
    this.http.get("/user/0").subscribe(
      res => {
        this.loading = false;
        this.userData = res.data;
      }
    )
  }

  add(tpl: TemplateRef<{}>) {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());

    this.modalSrv.create({
      nzTitle: '添加用户',
      nzContent: tpl,
      nzOnOk: () => {
        this.loading = true;
        let newUser = {
          "username": this.username,
          "password": this.password,
          "nickname": this.email,
          "avatar": "http://localhost:4200/assets/tmp/img/avatar.jpg",
          "email": this.email,
          "type": this.type
        }
        this.http.post('/user', newUser).subscribe((res) => {
          this.loading = false;
          if (res.code !== 0) {
            this.createMessage("error", res.message);
            return;
          }

          this.createMessage("success", "添加成功");
          this.getData()
        });
      }
    });
  }


}
