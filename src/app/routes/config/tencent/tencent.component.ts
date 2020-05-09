import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-config-tencent',
  templateUrl: './tencent.component.html',
  styleUrls: ["./tencent.component.less"]
})
export class ConfigTencentComponent implements OnInit {
  yun: any = {
    accessKey: "J3GdyGZQ0-_6IXr0o1oPtStijmbQ66wsz0Euoi2h",
    secretKey: "F2ea5kVfOlX1h_dv4yIIic0NH7eU_X18566dN3o2",
  }
  loading = false;
  constructor(private http: _HttpClient) { }

  ngOnInit() { }

  save() { }
}
