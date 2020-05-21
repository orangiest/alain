import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { STColumn, STComponent } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-resources-list',
  templateUrl: './list.component.html'
})
export class ResourcesListComponent implements OnInit {

  // 'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png'
  list: any[] = [
    null,
    {
      id: 1,
      title: 'JD图片未加载.png',
      link: 'https://gw.alipayobjects.com/zos/rmsportal/HrxcVbrKnCJOZvtzSqjN.png',
    },
    {
      id: 1,
      title: 'mark.png',
      link: 'https://gw.alipayobjects.com/zos/rmsportal/alaPpKWajEbIYEUvvVNf.png',
    },
    {
      id: 1,
      title: 'fengdie.jpg',
      link: 'https://gw.alipayobjects.com/zos/rmsportal/RLwlKSYGSXGHuWSojyvp.png',
    },
    {
      id: 1,
      title: 'test.png',
      link: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper, private modalSrv: NzModalService) { }

  ngOnInit() { }

  add(tpl: TemplateRef<{}>) {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());

    this.modalSrv.create({
      nzTitle: '上传文件',
      nzContent: tpl,
      // nzOnOk: () => {
      //   this.loading = true;
      //   this.http.post('/rule', { description: this.description }).subscribe(() => this.getData());
      // },
    });
  }

}
