import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-viewer-toolbar',
  templateUrl: './viewer-toolbar.component.html',
  styleUrls: ['./viewer-toolbar.component.css']
})
export class ViewerToolbarComponent implements OnInit {
  @Output() layout = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  doSplitLayout(layoutStyle: number): void {
    this.layout.emit(layoutStyle);
  }
}
