import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { _HttpClient } from '@delon/theme';
import { SFSchema, SFUISchema, SFRadioWidgetSchema } from '@delon/form';

@Component({
  selector: 'app-users-list-edit',
  templateUrl: './edit.component.html',
})
export class UsersListEditComponent implements OnInit {
  @Input() record: any = {};
  i: any;
  schema: SFSchema = {
    properties: {
      systemId: { type: 'number', title: '编号', readOnly: true },
      username: { type: 'string', title: '用户名', maxLength: 15 },
      password: { type: 'string', title: '密码', ui: { type: 'password' } },
      nickname: { type: 'string', title: '昵称' },
      email: { type: 'string', title: '邮箱', maxLength: 140 },
      type: {
        type: 'string',
        title: '角色身份',
        enum: ['管理员', '普通用户'],
        ui: {
          widget: 'radio',
          styleType: 'button',
          buttonStyle: 'solid',
        } as SFRadioWidgetSchema,
      },
    },
    required: ['username', 'password', 'nickname', 'email', 'type'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 },
    },
    $no: {
      widget: 'text'
    },
    $href: {
      widget: 'string',
    },
    $description: {
      widget: 'textarea',
      grid: { span: 24 },
    },
  };

  constructor(
    private modal: NzModalRef,
    private msgSrv: NzMessageService,
    public http: _HttpClient,
  ) { }

  ngOnInit(): void {
    // if (this.record.id > 0)
    // this.http.get(`/user/${this.record.id}`).subscribe(res => (this.i = res));'
    console.log(this.record)
    this.i = this.record;

  }

  save(value: any) {

    let user = value;
    if (value.type === "管理员") {
      user.type = 0;
    } else {
      user.type = 1;
    }

    this.http.put(`/user`, user).subscribe(res => {
      this.msgSrv.success('保存成功');
      this.modal.close(true);
    });
  }

  close() {
    this.modal.destroy();
  }
}
