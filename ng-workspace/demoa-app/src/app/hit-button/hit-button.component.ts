import { Component,OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-hit-button',
  templateUrl: './hit-button.component.html',
  styleUrls: ['./hit-button.component.css']
})
export class HitButtonComponent implements OnInit {

  @Input()
  label: number = 0;
  @Output()
  hits = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  btnClickHandler() {
    
    this.hits.emit(this.label);
  }

}
