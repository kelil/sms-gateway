import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SmsFromFileComponent } from './messageManagement/sms-from-file/sms-from-file.component';
import { ViewMessagesComponent } from './messageManagement/view-messages/view-messages.component';

const routes: Routes = [{ path: "home", component: HomeComponent },
{ path: "dashboard", component: DashboardComponent },
{path: "login", component: LoginComponent },
{path: "users/register", component: RegisterComponent },
{path: "messages/smsfromfile", component: SmsFromFileComponent},
{path: "messages/viewmessages", component: ViewMessagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
