import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThreeComponent } from './three/three.component';
import { DatabindComponent } from './databind/databind.component';
import { EventComponent } from './event/event.component';
import { TwowayComponent } from './twoway/twoway.component';
import { CalcComponent } from './calc/calc.component';
import { EmployShowComponent } from './employ-show/employ-show.component';
import { StudentShowComponent } from './student-show/student-show.component';
import { EmploydropdownComponent } from './employdropdown/employdropdown.component';
import { StudentdropdownComponent } from './studentdropdown/studentdropdown.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { CustomershowComponent } from './customershow/customershow.component';

// const appRoutes : Routes = [
//   {path:'first',component:FirstComponent},
//   {path:'second',component:SecondComponent},
//   {path:'event',component:EventComponent},
//   {path:'calc',component:CalcComponent},
//   {path:'',component:MenuComponent},
  
// ]
const appRoutes : Routes = [
  {path:'',component:LoginComponent},
  {path:'menu',component:MenuComponent,
  children : [
    {path:'first',component:FirstComponent,outlet:'data'},
  {path:'second',component:SecondComponent,outlet:'data'},
  {path:'event',component:EventComponent,outlet:'data'},
  {path:'three',component:ThreeComponent,outlet:'data'},
  {path:'calc',component:CalcComponent,outlet:'data'},
  {path:'employ-show',component:EmployShowComponent,outlet:'data'},
  {path:'student-show',component:StudentShowComponent,outlet:'data'},
  {path:'twoway',component:TwowayComponent,outlet:'data'},
  {path:'databind',component:DatabindComponent,outlet:'data'},
  {path:'customershow',component:CustomershowComponent,outlet:'data'},
  

  ]
}
]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThreeComponent,
    DatabindComponent,
    EventComponent,
    TwowayComponent,
    CalcComponent,
    EmployShowComponent,
    StudentShowComponent,
    EmploydropdownComponent,
    StudentdropdownComponent,
    MenuComponent,
    LoginComponent,
    CustomershowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
