import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  public visible = true;
  innerWidth: number;
  toggle() {
    if (this.visible) {
      return 'block';
    } else {
      return '';
    }
  }


  constructor() {
    if (window.innerWidth <= 992) {
      this.visible = false;
    }
  }

  ngOnInit() {
    console.log(window.innerWidth, this.visible);
  }

}
