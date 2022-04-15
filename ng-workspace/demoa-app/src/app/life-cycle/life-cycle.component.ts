import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {

   @Input() 
   value: string="";

  constructor() { 
    console.log("Constructor!!!");
  }

  ngOnInit(): void {
    console.log("NgOnInit!!!");
  }
  ngOnChanges(): void {
    console.log("NgOnChanges!!!");
  }
  ngDoCheck(): void {
    console.log("NgDoCheck!!!");
  }
  ngAfterContentInit(): void {
    console.log("NgAfterContentInit!!!");
  }
  ngAfterContentChecked(): void {
    console.log("NgAfterContentChecked!!!");
  }
  ngAfterViewInit(): void {
    console.log("NgAfterViewInit!!!");
  }
  ngAfterViewChecked(): void {
    console.log("NgAfterViewChecked!!!");
  }
  ngOnDestroy(): void {
    console.log("NgOnDestroy!!!");
  }
   
}
