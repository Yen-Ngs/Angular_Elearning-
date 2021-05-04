import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseViewModel } from 'src/app/_core/models/CourseViewModels';
import { CourseService } from 'src/app/_core/services/course.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id:string=''
  course:CourseViewModel = new CourseViewModel();

  constructor(private atvRoute:ActivatedRoute,
    private courseService:CourseService
    ) { }

  ngOnInit(): void {
    this.layChiTietKhoaHoc()
    // this.atvRoute.params.subscribe((params)=>{
    //   this.id = params.id
    // })
    // this.courseService.layChiTietKhoaHoc(this.id).subscribe((result)=>{
    //   console.log('result',result);
    //   this.course = result
      
    // },errors =>{
    //   console.log(errors.error);
      
    // })
    
  }
  dangKyKhoaHoc(khoaHoc){
    let userLogin = JSON.parse(localStorage.getItem('userLogin'))
    let objectAPI ={
      "maKhoaHoc": khoaHoc.maKhoaHoc,
      "taiKhoan": userLogin.taiKhoan
    }
    this.courseService.dangKyKhoaHoc(objectAPI).subscribe(result =>{
      console.log('result', result);
      
    }, errors=>{
        console.log(errors);
        
    })
  }
  layChiTietKhoaHoc = async()=>{
    try{
      
    const params:any = await this.atvRoute.params.pipe();
  
    //call service
    const result:any = await this.courseService.layChiTietKhoaHoc(params.value.id).pipe().toPromise();
    this.course =result;
  }catch(errors){
    console.log('errors', errors.error);
    
  }
}

}
