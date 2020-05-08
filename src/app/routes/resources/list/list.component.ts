import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';

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
      title: 'example',
      link: 'https://gw.alipayobjects.com/zos/rmsportal/HrxcVbrKnCJOZvtzSqjN.png',
    },
    {
      id: 1,
      title: 'example',
      link: 'https://gw.alipayobjects.com/zos/rmsportal/alaPpKWajEbIYEUvvVNf.png',
    },
    {
      id: 1,
      title: 'example',
      link: 'https://gw.alipayobjects.com/zos/rmsportal/RLwlKSYGSXGHuWSojyvp.png',
    },
    {
      id: 1,
      title: 'example',
      link: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
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
