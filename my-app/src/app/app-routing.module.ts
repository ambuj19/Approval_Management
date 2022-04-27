import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApprovalRequestComponent } from './approval-request/approval-request.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'request', component:ApprovalRequestComponent},
   {path:'**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
