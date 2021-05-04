import { Component, Input, OnChanges, OnInit, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-demo-lifecycle',
  templateUrl: './demo-lifecycle.component.html',
  styleUrls: ['./demo-lifecycle.component.scss']
})
export class DemoLifecycleComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
@Input() title:string = 'default';
timeOut:any ={};
  constructor() { }
  ngOnChanges(changes: SimpleChanges):void{
    console.log('onchange',changes);
    
  }

  ngOnInit(): void {
    //giong componentDidMount
    this.timeOut= setInterval(()=>{
      console.log('1');
      
    },1000)
   
  }

  ngAfterViewInit():void{
    //sau khi giao dien ca cac thuoc tinh da render ra xong
    console.log('AfterviewInit');
  }
  ngOnDestroy():void {
    clearInterval(this.timeOut)
    // thuc thi truoc khi component mat khoi giao dien 
    console.log('destroy');
  }

}
