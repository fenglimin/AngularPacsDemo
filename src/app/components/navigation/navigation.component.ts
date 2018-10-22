import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    thumbnails = ['1', '2', '3', '4', '5', '6'];
        
    imageSopSelected: string;
    constructor() {

    }

  ngOnInit() {
  }

}
