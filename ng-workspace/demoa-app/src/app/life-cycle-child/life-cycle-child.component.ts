import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle-child',
  templateUrl: './life-cycle-child.component.html',
  styleUrls: ['./life-cycle-child.component.css']
})
export class LifeCycleChildComponent implements OnInit {

  @Input() value: string="";

  constructor() { 
    console.log("child Constructor!!!");
  }

  ngOnInit(): void {
    console.log("child NgOnInit!!!");
    
  }
  ngOnChanges(): void {
    console.log("child NgOnChanges!!!");
  }
  ngDoCheck(): void {
    console.log("child NgDoCheck!!!");
  }
  ngAfterContentInit(): void {
    console.log("child NgAfterContentInit!!!");
  }
  ngAfterContentChecked(): void {
    console.log("child NgAfterContentChecked!!!");
  }
  ngAfterViewInit(): void {
    console.log("child NgAfterViewInit!!!");
  }
  ngAfterViewChecked(): void {
    console.log("child NgAfterViewChecked!!!");
  }
  ngOnDestroy(): void {
    console.log("child NgOnDestroy!!!");
  }
   
}