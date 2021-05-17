import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { EmployComponent } from './employ/employ.component';
import { EmploysearchComponent } from './employsearch/employsearch.component';
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { UsersearchComponent } from './usersearch/usersearch.component';
import { CustomerSearchcomponent } from './customersearch/customersearch.component';
const appRoutes : Routes = [
  {path:'',component:LoginComponent},
  {path:'menu',component:MenuComponent,
  children : [
    {path:'user',component:UserComponent,outlet:'data'},
  {path:'user-search',component:UsersearchComponent,outlet:'data'},
  {path:'employ',component:EmployComponent,outlet:'data'},
  {path:'employ-search',component:EmploysearchComponent,outlet:'data'},
  {path:'customer',component:CustomerComponent,outlet:'data'},
  {path:'customer-search',component:CustomerSearchcomponent,outlet:'data'},
  ]
}
]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployComponent,
    EmploysearchComponent,
    UsersearchComponent,
    CustomerComponent,
    CustomerSearchcomponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }