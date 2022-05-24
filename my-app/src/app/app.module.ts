import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApprovalRequestComponent } from './approval-request/approval-request.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BudgetApprovalEmiModule } from 'budget-approval-emi';
import { MatMenuModule} from '@angular/material/menu';
import { MyRequestComponent } from './my-request/my-request.component';
import { NavComponent } from './shared-module/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from './request.service';
import { ToastrModule } from 'ngx-toastr';
import { EditRequestComponent } from './edit-request/edit-request.component';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { MaterialModule } from './material/material.module';
import { MyModalComponent } from './my-modal/my-modal.component';
import { CommentModalComponent } from './my-modal/comment-modal/comment-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ApprovalRequestComponent,
    LoginComponent,
    MyRequestComponent,
    MyModalComponent,
    NavComponent,
    EditRequestComponent,
    AdminLandingComponent,
    CommentModalComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    BudgetApprovalEmiModule,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
  ],
  providers: [RequestService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
