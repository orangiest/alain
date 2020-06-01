import { Component, OnInit, ViewChild, TemplateRef, Inject } from '@angular/core';
import { STColumn, STComponent } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Resource } from '../../../shared/domain/resource';
import { environment } from '@env/environment';
import { UploadChangeParam } from 'ng-zorro-antd/upload/interface';
import { UploadFile } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DA_SERVICE_TOKEN, TokenService } from '@delon/auth';
import { HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-resources-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ResourcesListComponent implements OnInit {

  fileType;
  fileList = [];
  loading = false;
  file_url: string = "http://assets.cwm.wiki/config/file.jpg";
  // 'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png'
  list: any[] = [
    null,
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper, private modalSrv: NzModalService, private msg: NzMessageService, @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.http.get('/res/0').subscribe(
      res => {
        this.loading = false;
        if (res.code != 0) {

        }

        this.list = this.list.concat(res.data);
        this.list.forEach(e => {
          if (e === null) {
            return;
          }
          if (e.fileType === 1) {
            e.link = encodeURI(environment.SERVER_URL + '/r/' + e.localName);
          } else {
            e.link = this.file_url;
          }
        });

      }
    )
  }



  beforeUpload = (file: UploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };

  add(tpl: TemplateRef<{}>) {
    const formData = new FormData();

    this.modalSrv.create({
      nzTitle: '上传文件',
      nzContent: tpl,
      nzOnOk: () => {
        formData.append('file', this.fileList[0]);
        formData.append('type', this.fileType);
        formData.append('userId', this.tokenService.get().systemId);
        this.loading = true;
        this.http.post("/res", formData).subscribe(
          res => {
            this.loading = false;
            if (res.code != 0) {
              this.msg.error(res.message);
            }

            this.msg.success("上传成功");
            this.fileList = [];
            this.list = [null];
            this.getData();
          }
        )
      },
    });
  }

}
