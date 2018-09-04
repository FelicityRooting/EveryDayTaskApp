import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { AppRoutingModule } from "./app-routing.module";
import { SetupModule } from "./pages/setup/setup.module";
import { MainModule } from './pages/main/main.module';
import { MainRoutingModule } from "./pages/main/main-routing.module";
import {SummaryModule} from "./pages/summary/summary.module";
import {SettingModule} from "./pages/setting/setting.module";

registerLocaleData(zh);//Register global data to be used internally by Angular

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //下面两个module如果不import，会无法正确显示动画效果
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    //同样import ngzorro
    NgZorroAntdModule,
    //import AppRoutingModule and SetupModule to config setup page
    AppRoutingModule,
    SetupModule,
    //for main page
    MainRoutingModule,
    MainModule,
    SummaryModule,
    SettingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],//这里设置当前全局使用的语言包
  bootstrap: [AppComponent]//The application launches by bootstrapping the root AppModule
})
export class AppModule { }
