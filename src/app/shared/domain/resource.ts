import { StringProperty } from '@delon/form';

export interface Resource {
  //  "systemId": 13,
  //     "localName": "是中文.txt",
  //     "remoteName": "是中文.txt",
  //     "tencent": "https://monitor-1251426495.cos.ap-chengdu.myqcloud.com/是中文.txt",
  //     "aliyun": "https://monitor-1251426495.oss-cn-beijing.aliyuncs.com/是中文.txt",
  //     "qiniu": "http://assets.cwm.wiki/是中文.txt",
  //     "fileType": 1,
  //     "userName": "管理员1",
  //     "size": 0,
  // "time": "2020-05-23"

  systemId: number;
  localName: string;
  remoteName: string;
  tencent: string;
  aliyun: string;
  qiniu: string;
  fileType: number;
  userName: string;
  sive: number;
  time: string;
  link: string;
}
