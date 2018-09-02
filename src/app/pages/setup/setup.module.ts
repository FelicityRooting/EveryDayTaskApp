import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup.component';
import { FormsModule} from "@angular/forms";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { LocalStorageService} from "../../service/local-storage.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule//安装的ngzorro，这样在初始的setup页面可显示出ngzrro的log
  ],
  providers:[LocalStorageService],
  declarations: [SetupComponent]//此module里放入setupcomponent
})
export class SetupModule { }
