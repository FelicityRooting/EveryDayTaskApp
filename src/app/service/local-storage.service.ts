// 在我们开始写界面之前，先简单分析一下。显然，我们需要把用户名和初始化标记存入 local storage，也很显然，我们不应该把
// localStorage.set 等代码直接下载组件文件中，一是因为其他 module 和 component 肯定也要访问用户名信息，二是这提高
// 了代码的耦合性——如果我们切换了存储机制（比如我们要迁移到 Electron 上，要利用基于数据库和文件的存储），我们需要到处修
// 改——所以我们要在这里引入 local storage service。除此之外，既然多个 module 需要读取同一信息，我们就要对键值 key
// 做出约定。



import { Injectable } from '@angular/core';

const ls = localStorage;

@Injectable()

export class LocalStorageService {

  constructor() { }

  public get<T>(key: string): any {
    return JSON.parse(ls.getItem(key)) as T;
  }

  public getList<T>(key: string) {
    const before = ls.getItem(key);
    return before ? (JSON.parse(before) as T[]) : [];
  }

  public set(key: string, value: any): void {
    if (!value && value === undefined) {
      return;
    }
    const arr = JSON.stringify(value);
    ls.setItem(key, arr);
  }
}
