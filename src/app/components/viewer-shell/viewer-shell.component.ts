import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewer-shell',
  templateUrl: './viewer-shell.component.html',
  styleUrls: ['./viewer-shell.component.css']
})
export class ViewerShellComponent implements OnInit {
  row = new Array(1);
  col = new Array(1);
  rowNum = 1;
  colNum = 1;

  constructor() { }

  ngOnInit() {
  }

  onLayoutChanged(newLayout:number): void {
    this.rowNum = Math.trunc(newLayout / 10);
    this.colNum = newLayout % 10;
    this.row = new Array(this.rowNum);
    this.col = new Array(this.colNum);

    var divViewers = document.getElementsByName('DivViewer');
    var viewWidth = Math.trunc(764 / this.colNum) + 'px';
    var viewHeight = Math.trunc(618 / this.rowNum) + 'px';

    for (let divViewer of divViewers) {
      divViewer.style.setProperty('--view-width', viewWidth);
      divViewer.style.setProperty('--view-height', viewHeight);
    }

  }
}
