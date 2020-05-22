import { Component, OnInit, Inject } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { DA_SERVICE_TOKEN, TokenService } from '@delon/auth';
import { NzMessageService } from 'ng-zorro-antd/message';
import { User } from 'src/app/shared/domain/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting-index',
  templateUrl: './index.component.html',
  styleUrls: ["./index.component.less"]
})
export class SettingIndexComponent implements OnInit {
  loading = false;
  user: User;
  password: any = {
    old: '',
    new: '',
  }
  constructor(private http: _HttpClient, @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService, private msg: NzMessageService, private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    let SystemId = this.tokenService.get().systemId;
    this.http.get(`/user/${SystemId}`).subscribe(
      res => {
        this.loading = false;
        this.user = res.data[0];
      }
    )
  }


  saveInfo() {
    this.loading = true;
    let update = {
      "systemId": this.user.systemId,
      "emial": this.user.email,
      "nickname": this.user.nickname
    }
    this.http.put("/user", update).subscribe(
      res => {
        this.loading = false;
        if (res.data === true) {
          this.msg.success("修改成功")
          return;
        } else {
          this.msg.error(res.message)
          return;
        }
      }
    )
  }

  savePass() {
    this.loading = true;
    if (this.password.old != this.user.password) {
      this.msg.error("原密码错误")
      this.loading = false;
      return

    }

    if (this.password.new === this.user.password) {
      this.msg.error("不能与原密码相同")
      this.loading = false;
      return;
    }

    let update = {
      "systemId": this.user.systemId,
      "password": this.password.new
    }

    this.http.put("/user", update).subscribe(
      res => {
        if (res.data === true) {
          this.msg.success("修改成功,跳转至登陆界面")
          this.tokenService.clear();
          this.router.navigateByUrl(this.tokenService.login_url);
        } else {
          this.msg.error("修改失败")
          return;
        }
      }
    )
  }
}
