import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { HeaderComponent } from './home-template/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
//get input data from user => import @angular form
import {FormsModule} from '@angular/forms';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DemoLifecycleComponent } from './demo-lifecycle/demo-lifecycle.component'
import { ShareModule } from 'src/app/_core/share/share/share.module';
import { ModalComponent } from 'src/app/_core/share/share/modal/modal.component';
import { LoginGuard } from 'src/app/_core/guard/login.guard';
import { IsSaveGuard } from 'src/app/_core/guard/is-save.guard';
//cấu hình route cho home module


const HomeRoute:Routes = [
  {path:'',component:HomeTemplateComponent,children:[
    {path:'',component:HomePageComponent},
    {path:'homepage',component:HomePageComponent},
    {path:'details/:id', component:DetailsComponent, canActivate:[LoginGuard]},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent, canDeactivate:[IsSaveGuard]},
    {path: 'lifecycle', component:LifecycleComponent},
  ]}
]


@NgModule({
  declarations: [
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    HomeTemplateComponent,
    HeaderComponent,
    DetailsComponent,
    LifecycleComponent,
    DemoLifecycleComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(HomeRoute),ShareModule,
    FormsModule // get input data from users => import @angular form 
  ],
  exports:[HeaderComponent]
})
export class HomeModule { }
