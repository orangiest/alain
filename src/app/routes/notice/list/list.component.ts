import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, TemplateRef, Inject } from '@angular/core';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Notice } from '../../../shared/domain/notice';
import { TokenService, DA_SERVICE_TOKEN } from '@delon/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-notice-list',
  templateUrl: './list.component.html',
})
export class NoticeListComponent implements OnInit {
  list: Notice[] = [];
  loading = false;
  error = "";
  title = "";
  content = "";

  constructor(private http: _HttpClient, private modal: ModalHelper, private modalSrv: NzModalService, private msg: NzMessageService, @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService, private router: Router) { }

  ngOnInit() {
    this.getData()
  }

  createMessage(type: string, content: string): void {
    this.msg.create(type, `${content}`);
  }

  add(tpl: TemplateRef<{}>) {
    if (this.tokenService.get().type != 0) {
      this.router.navigate(['/exception/403']);
      return;
    }
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());

    this.modalSrv.create({
      nzTitle: '发布公告',
      nzContent: tpl,
      nzOnOk: () => {
        let des = {
          "title": this.title,
          "content": this.content,
          "userId": this.tokenService.get().systemId,
        }
        this.http.post('/notice', des).subscribe((res) => {
          if (res.code !== 0) {
            this.createMessage("error", res.message);
            return;
          }

          this.createMessage("success", "添加成功");
          this.getData()
        });
      },
    });
  }

  delete(item: Notice) {
    if (this.tokenService.get().type != 0) {
      this.router.navigate(['/exception/403']);
      return;
    }
    this.loading = true;
    this.http.delete("/notice/" + item.systemId).subscribe(
      res => {
        this.loading = false;
        if (res.code !== 0) {
          this.createMessage("error", res.message);
          return;
        }

        this.createMessage("success", "删除成功");
        this.getData()


      }
    )
  }

  cancel() {

  }

  getData() {
    this.loading = true;
    this.http.get("/notice/0").subscribe((res) => {
      this.loading = false;
      this.list = res.data
    })
  }
}
