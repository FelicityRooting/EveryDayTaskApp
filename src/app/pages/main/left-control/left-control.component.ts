import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { LocalStorageService } from "../../../service/local-storage.service";
import { USERNAME } from "../../../service/local-storage.namespace";
import { Router } from '@angular/router';
import { ListComponent } from "./list/list.component";

@Component({
  selector: 'app-left-control',
  templateUrl: './left-control.component.html',
  styleUrls: ['./left-control.component.less']
})
export class LeftControlComponent implements OnInit {
  @Input() isCollapsed: boolean;
  @ViewChild(ListComponent) listComponent: ListComponent;

  username: string;


  constructor(
    private store: LocalStorageService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.username = this.store.get(USERNAME);
    // this.username = "hhh";
  }

  openAddListModal(): void {
    // 在 Angular 中调用子组件
    this.listComponent.openAddListModal();
  }

  goSetting() {
    this.router.navigateByUrl('/setting');
  }

  goSummary() {
    this.router.navigateByUrl('/summary');
  }
}
