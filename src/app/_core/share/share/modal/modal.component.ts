import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CourseService } from 'src/app/_core/services/course.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  khoaHocChiTiet:any={};
  subModel: Subscription;
  constructor(private khoaHocService:CourseService) { }

  ngOnInit(): void {
    this.khoaHocService.dataKhoaHoc.subscribe((result)=>{
      this.khoaHocChiTiet = result;

    },errors=>{
      console.log(errors);
      
    })
  }
  ngOnDestroy():void{
    if(this.subModel){
      this.subModel.unsubscribe();
    }
  }

}
