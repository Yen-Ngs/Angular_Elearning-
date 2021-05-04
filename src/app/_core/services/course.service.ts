import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { 
    //Dependency injection(DI)}
    
}
khoaHocChiTietState:any = new BehaviorSubject({tenKhoaHoc:'default', hinhAnh:'https://picsum.photos/200'});
dataKhoaHoc = this.khoaHocChiTietState.asObservable();


layDanhSachKhoaHoc():Observable<any>{
  let result:Observable<any> = this.http.get(`https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`)
  return result;
}
layChiTietKhoaHoc(maKhoaHoc:string):Observable<any>{
  let result:Observable<any> = this.http.get(`https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
  return result;
}
dangKyKhoaHoc(thongTinDangKy){
  let result: Observable<any> = this.http.post(`https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc`, thongTinDangKy)
  return result;
}
}
