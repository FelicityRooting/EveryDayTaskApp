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
    NgZorroAntdModule
  ],
  providers:[LocalStorageService],
  declarations: [SetupComponent]
})
export class SetupModule { }
