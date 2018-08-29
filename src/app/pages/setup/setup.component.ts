import {Component, HostBinding, OnInit} from '@angular/core';
import { LocalStorageService } from "../../service/local-storage.service";
import {
  USERNAME,
  INIT_FLAG,
  START_USING_DATE
} from "../../service/local-storage.namespace";
import { getTodayTime } from '../../../utils/time';//用时间戳来简单地处理时间
import { setupTransition } from './setup.animation';
import {Router} from "@angular/router";

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.less'],
  animations: [ setupTransition ]
})
export class SetupComponent implements OnInit {
  @HostBinding('@setupTransition') state = 'activated';
  username: string;

  constructor(
    private store: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  completeSetup(): void {
    this.store.set(INIT_FLAG, true);
    this.store.set(START_USING_DATE, getTodayTime());
    this.store.set(USERNAME, this.username);

    this.router.navigateByUrl('main');
  }

}
