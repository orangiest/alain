import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { Router, ActivationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-config-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class ConfigIndexComponent implements OnInit {
  private router$: Subscription;

  mode = 'inline';
  title: string;
  menus: any[] = [
    {
      key: 'ali',
      title: '阿里云配置',
    },
    {
      key: 'tencent',
      title: '腾讯云配置',
    },
    {
      key: 'qiniu',
      title: '七牛云配置',
    },
  ];
  constructor(private http: _HttpClient, private router: Router) {
    this.router$ = this.router.events.pipe(filter(e => e instanceof ActivationEnd)).subscribe(() => this.setActive());
  }

  ngOnInit() { }

  private setActive() {
    const key = this.router.url.substr(this.router.url.lastIndexOf('/') + 1);
    this.menus.forEach(i => {
      i.selected = i.key === key;
    });
    this.title = this.menus.find(w => w.selected).title;
  }

  to(item: any) {
    // /${item.key}
    this.router.navigateByUrl(`/config/${item.key}`);
  }

}
