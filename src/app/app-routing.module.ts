import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SetupComponent } from "./pages/setup/setup.component";
import { InitGuardService } from "./services/init-guard/init-guard.service";

const routes: Routes = [
  //The empty path in the route represents the default path for the application, the place to go when the path in the
  // URL is empty, as it typically is at the start. This default route redirects to the route for the /setup URL and,
  // therefore, will display the SetupComponent.
  { path: 'setup', component: SetupComponent, canActivate: [ InitGuardService ] },
  { path: 'main', redirectTo: '/main', pathMatch: 'full' },
  { path: '', redirectTo: '/setup', pathMatch: 'full' },
  { path: 'summary', redirectTo: '/summary', pathMatch: 'full' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
