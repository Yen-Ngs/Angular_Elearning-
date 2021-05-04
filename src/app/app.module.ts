import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//Cấu hình routing 
import {Routes,RouterModule} from '@angular/router'
import { HomePageComponent } from './Modules/home/home-page/home-page.component';
import { LoginComponent } from './Modules/home/login/login.component';
import { RegisterComponent } from './Modules/home/register/register.component';
import { HeaderComponent } from './Modules/home/home-template/header/header.component';
import { HomeModule } from './Modules/home/home.module';
import { UserModule } from './Modules/user/user.module';
//import api
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { CourseService } from './_core/services/course.service';
import { JwtInterceptor } from './_core/guard/jwt.interceptor';


const appRoutes:Routes = [

  {path:'home', loadChildren:() => HomeModule},
  {path:'user', loadChildren:() => UserModule},
  {path:'',loadChildren: ()=>HomeModule}
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //Router module này sẽ điều cho thẻ <router-outlet></router-outlet> tại app component
    BrowserModule,RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [CourseService,
  {provide: HTTP_INTERCEPTORS, useClass:JwtInterceptor, multi:true}],// import services su dung cho module
  bootstrap: [AppComponent]
})
export class AppModule { }
