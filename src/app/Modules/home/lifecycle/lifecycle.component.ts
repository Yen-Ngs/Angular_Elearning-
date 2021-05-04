import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, OnChanges {
  title:string='';
  constructor() { }
  changeTitle (value:string){
    this.title =value
  }

  ngOnChanges(changes:SimpleChanges):void{
    console.log('onchange',changes);
    
  }

  ngOnInit(): void {
  }

}
