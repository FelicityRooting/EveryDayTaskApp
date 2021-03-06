import { Component, ElementRef, Host, HostBinding, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import {pageSwitchTransition} from "../summary/summary.animation";
import {AVATAR_CODE, USERNAME} from "../../service/local-storage.namespace";
import {LocalStorageService} from "../../service/local-storage.service";



@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: [ './setting.component.less' ],
  animations: [ pageSwitchTransition ]
})
export class SettingComponent implements OnInit {
  avatar = this.store.get(AVATAR_CODE);
  username = this.store.get(USERNAME);

  @HostBinding('@pageSwitchTransition') state = 'activated';
  @ViewChild('usernameInput') private usernameInput: ElementRef;

  constructor(
    private store: LocalStorageService,
    private message: NzMessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.usernameInput.nativeElement.value = this.username;
  }

  validateUsername(username: string): void {
    if (!username) {
      this.message.error('Username cannot be null');
      this.usernameInput.nativeElement.value = this.username;
    } else if (username !== this.username) {
      this.username = username;
      this.store.set(USERNAME, username);
      this.message.success('Username has been changed');
    }
  }

  private getBase64(img: File, callback: (img: {}) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  handleAvatarImageChange(info: { file: UploadFile }): void {
    // This method would be triggered three times, I guess it's a bug of ng-zorro-antd.
    this.getBase64(info.file.originFileObj, (img: string) => {
      this.avatar = img;
      this.store.set(AVATAR_CODE, img);
    });
  }

  goBack(): void {
    this.router.navigateByUrl('/main');
  }
}
