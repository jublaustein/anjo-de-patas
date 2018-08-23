import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {

  public visible = true;
  innerWidth: number;
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }
  }



  constructor() {
    // if (window.innerWidth <= 992) {
    //   this.visible = false;
    // }
    // const actualHeight: number = window.innerHeight;
    // const actualWidth: number = window.innerWidth;
  }

  ngOnInit() {
    console.log(window.innerWidth);
  }

}
