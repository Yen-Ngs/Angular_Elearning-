import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

interface UserLogin{
  taiKhoan:string,
  matKhau:string,
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //create a state
  stateUser = new BehaviorSubject({taiKhoan:'', matKhau:''}) // value is default
  //doi tuong dung de lay data tu bien behavior
  dataUser = this.stateUser.asObservable()


  constructor(private http:HttpClient) { }

  setUserLogin(newUserLogin){
    this.stateUser.next(newUserLogin)
  }
  login(userLogin):Observable<any>{
    let result:Observable<any> = this.http.post('https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',userLogin);
    return result;

  }
}
