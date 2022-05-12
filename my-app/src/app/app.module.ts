import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApprovalRequestComponent } from './approval-request/approval-request.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { BudgetApprovalEmiModule } from 'budget-approval-emi';
import { MatMenuModule} from '@angular/material/menu';
import { MyRequestComponent } from './my-request/my-request.component';
import { NavComponent } from './shared-module/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from './request.service';
import { ToastrModule } from 'ngx-toastr';
import { EditRequestComponent } from './edit-request/edit-request.component';

@NgModule({
  declarations: [
    AppComponent,
    ApprovalRequestComponent,
    LoginComponent,
    MyRequestComponent,
    NavComponent,
    EditRequestComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,

    HttpClientModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    BudgetApprovalEmiModule,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    MatRadioModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    MatInputModule,
    MatNativeDateModule,
    MatDialogModule,

  ],
  providers: [RequestService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
