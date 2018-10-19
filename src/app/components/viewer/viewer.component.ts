import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  @Input() rowIndex: number;
  @Input() colIndex: number;

  constructor() { }

  ngOnInit() {
  }

}
