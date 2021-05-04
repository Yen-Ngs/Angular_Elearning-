import { Component, OnInit } from '@angular/core';
import { CourseViewModel } from 'src/app/_core/models/CourseViewModels';
import { CourseService } from 'src/app/_core/services/course.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'   ,
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  course: CourseViewModel[] = [];

  constructor(private courseService: CourseService) { }
  xemChiTiet(item:any){
    this.courseService.khoaHocChiTietState.next(item);
  }
  ngOnInit(): void {
    let observableCourse = this.courseService.layDanhSachKhoaHoc()

    observableCourse.subscribe((result)=>{
      this.course =result;
    },(errors)=>{
      console.log(errors.error);
      
    })
  }

}
