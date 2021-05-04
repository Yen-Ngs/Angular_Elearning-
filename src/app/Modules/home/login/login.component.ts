import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }
 signIn(frmValue:any){
  //  for (let key in frmValue){
  //    if(frmValue[key].trim() === ''){
  //      alert('data is invalid');
  //      return;
  //    }
  //  }
   this.userService.login(frmValue).subscribe((result)=>{
     console.log(result);
     localStorage.setItem('userLogin', JSON.stringify(result))
     localStorage.setItem('accessToken',result.accessToken)
     this.router.navigate(['/home'])

     // cap nhat lai service 
     this.userService.setUserLogin(result)
     

   },errors =>{
     alert(errors.error)
      console.log(errors);
      
   })

}
}
