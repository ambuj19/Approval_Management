import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';

import { AppComponent } from './app.component';
import { ApprovalRequestComponent } from './approval-request/approval-request.component';
import { EditRequestComponent } from './edit-request/edit-request.component';
import { LoginComponent } from './login/login.component';
import { MyRequestComponent } from './my-request/my-request.component';

const routes: Routes = [
  {path:'admin',component:AdminLandingComponent},
  {path:'edit-request/:id',component:EditRequestComponent},
  {path:'my-request',component:MyRequestComponent},
  {path:'request', component:ApprovalRequestComponent},
   {path:'**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
