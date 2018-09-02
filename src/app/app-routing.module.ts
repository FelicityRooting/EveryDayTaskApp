import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
//引入setupComponent，因为这是需要从localhost:4200跳转到localhost:4200/setup
import { SetupComponent } from "./pages/setup/setup.component";
import { InitGuardService } from "./services/init-guard/init-guard.service";

const routes: Routes = [
  //The empty path in the route represents the default path for the application, the place to go when the path in the
  // URL is empty, as it typically is at the start. This default route redirects to the route for the /setup URL and,
  // therefore, will display the SetupComponent.

  //跳转到localhost:4200/setup时，进入的是setupcomponent控制的页面
  { path: 'setup', component: SetupComponent, canActivate: [ InitGuardService ] },
  { path: 'main', redirectTo: '/main', pathMatch: 'full' },
  //空着的部分被重新定位到/setup
  { path: '', redirectTo: '/setup', pathMatch: 'full' },
  { path: 'summary', redirectTo: '/summary', pathMatch: 'full' }
];



@NgModule({
  //configures the router via the RouterModule.forRoot method
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]//You don't need to export it. It's just for convenience.
})

//creates an AppRoutingModule
export class AppRoutingModule {

}
