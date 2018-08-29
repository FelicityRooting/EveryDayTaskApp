import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';
import { SummaryService } from './summary.service';
import { pageSwitchTransition } from './summary.animation';
import { getTodayTime, ONE_DAY } from '../../../utils/time';
import { Summary } from '../../../domain/entities';
import {START_USING_DATE, USERNAME} from "../../service/local-storage.namespace";
import {LocalStorageService} from "../../service/local-storage.service";



@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: [ './summary.component.less' ],
  animations: [ pageSwitchTransition ]
})
export class SummaryComponent implements OnInit {
  username = this.store.get(USERNAME) || 'username';
  dateCount = Math.floor((getTodayTime() - this.store.get(START_USING_DATE)) / ONE_DAY + 1);

  @HostBinding('@pageSwitchTransition') private state = 'activated';

  constructor(
    private summaryService: SummaryService,
    private store: LocalStorageService,
    private router: Router,
    private noti: NzNotificationService
  ) { }

  ngOnInit() {
    this.summaryService.doSummary();
  }

  requestForDate(date: Date): Summary | null {
    return this.summaryService.summaryForDate(date.getTime());
  }

  requestForMonth(month: Date | number): void { }

  showSummaryDetail(summary: Summary): void {
    if (!summary) { return; }

    const { cCount, uCount } = summary;
    if (uCount) {
      this.noti.error('has uncomplete task', `you did all tasks! ${cCount / (cCount + uCount)}%`);
    } else if (cCount) {
      this.noti.success("complete all today's work", 'great work!');
    }
  }

  goBack(): void {
    this.router.navigateByUrl('/main');
  }
}
