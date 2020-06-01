import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Resource } from 'src/app/shared/domain/resource';
import { HttpClient } from '@angular/common/http';
import { _HttpClient } from '@delon/theme';
import { environment } from '@env/environment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DA_SERVICE_TOKEN } from '@delon/auth';

@Component({
  selector: 'app-detial',
  templateUrl: './detial.component.html',
  styleUrls: ['./detail.component.less']
})
export class ResourcesDetailComponent implements OnInit {
  loading = false;
  systemId;
  info: Resource;
  constructor(private acRouter: ActivatedRoute, private http: _HttpClient, private router: Router, private msg: NzMessageService, @Inject(DA_SERVICE_TOKEN) private tokenService) {
    this.systemId = acRouter.snapshot.params.systemId;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.http.get(`/res/${this.systemId}`).subscribe(
      res => {
        this.loading = false;
        this.info = res.data[0];
        this.info.link = encodeURI(environment.SERVER_URL + '/r/' + res.data[0].localName);
      }
    )
  }

  download() {
    let btnDownload = document.createElement('a'),
      clickEvent = document.createEvent("MouseEvent");

    clickEvent.initEvent("click", true, false);
    btnDownload.setAttribute("href", this.info.link);
    btnDownload.setAttribute("download", this.info.localName);

    btnDownload.dispatchEvent(clickEvent);

  }

  funDownload(content, filename) {
    var eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    // 字符内容转变成blob地址
    var blob = new Blob([content]);
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
  }

  delete() {
    if (this.tokenService.get().type != 0) {
      this.router.navigate(['/exception/403']);
      return;
    }
    this.loading = true
    this.http.delete(`/res/${this.info.systemId}`).subscribe(
      res => {
        this.loading = false;
        if (res.data != null) {
          this.msg.success("删除成功");
        }
        this.router.navigate(['resources'])
      }
    )


  }

}
