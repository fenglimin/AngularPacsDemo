import { Component, OnInit, ViewChildren, QueryList, AfterViewInit  } from '@angular/core';
import { ViewerComponent } from '../viewer/viewer.component';

@Component({
  selector: 'app-viewer-shell',
  templateUrl: './viewer-shell.component.html',
  styleUrls: ['./viewer-shell.component.css']
})
export class ViewerShellComponent implements OnInit, AfterViewInit {
  totalRow = 1;
  totalCol = 1;

  @ViewChildren(ViewerComponent) viewers: QueryList<ViewerComponent>;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  onLayoutChanged(newLayout:number): void {
    this.totalRow = Math.trunc(newLayout / 10);
    this.totalCol = newLayout % 10;
  }
}
