import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_core/services/user.service';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand-md navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" routerLink="/home" routerLinkActive="bg-dark text-white">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item" *ngIf="(userLogin.taiKhoan !=='')">
                    <a class="nav-link" routerLinkActive="bg-dark text-white">{{userLogin.taiKhoan}}</a>
                </li>
                <li class="nav-item" *ngIf="!(userLogin.taiKhoan !=='')">
                    <a class="nav-link" routerLinkActive="bg-dark text-white"  routerLink="/login">login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" routerLinkActive="bg-dark text-white" routerLink="/register">register</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" routerLinkActive="bg-dark text-white" routerLink="/lifecycle">lifecycle</a>
                </li>
                
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    userLogin:any ={taiKhoan:'', matKhau:''};


  constructor(private userService:UserService) { }

//   async ngOnInit(){
//       //type 1: get data by async await
//     const result:any = await this.userService.dataUser.pipe()
//     this.userLogin = result.source.value;
//   }

//type2: get value from service to component 

    ngOnInit(){
        this.userService.dataUser.subscribe(result=>{
            console.log(result);
            this.userLogin= result
            
        },errors =>{
            console.log(errors);
            
        })
    }


}
