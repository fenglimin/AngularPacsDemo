import { Component, OnInit, ViewChildren, QueryList, AfterViewInit  } from '@angular/core';
import { ImageSelectorService } from '../../services/image-selector.service';
import { ViewerComponent } from '../viewer/viewer.component';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-viewer-shell',
  templateUrl: './viewer-shell.component.html',
  styleUrls: ['./viewer-shell.component.css']
})
export class ViewerShellComponent implements OnInit, AfterViewInit {
  row = new Array(1);
  col = new Array(1);
  rowNum = 1;
  colNum = 1;
  selectedDivId = "";

  subscription: Subscription;

  @ViewChildren(ViewerComponent) viewers: QueryList<ViewerComponent>;

  constructor(private imageSelectorService: ImageSelectorService) {
      this.subscription = imageSelectorService.imageSelected$.subscribe(
          imageSop => {
              this.doSelectBySop(imageSop);
          });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.viewers.forEach((item) => {
      item.test(this.selectedDivId);
    });
  }

  onLayoutChanged(newLayout:number): void {
    this.rowNum = Math.trunc(newLayout / 10);
    this.colNum = newLayout % 10;
    this.row = new Array(this.rowNum);
    this.col = new Array(this.colNum);


    this.viewers.forEach((item) => {
      item.test(this.selectedDivId);
    });
  }

  onSelected(rowIndex: number, colIndex: number): void {
      if (this.selectedDivId !== "") {
          this.doSelectById(this.selectedDivId, false);
      }

      this.selectedDivId = "DivViewer" + rowIndex + colIndex;
      this.doSelectById(this.selectedDivId, true);

      var imageSop = rowIndex * this.colNum + colIndex + 1;
      this.imageSelectorService.selectImage(imageSop.toString());

    this.viewers.forEach((item) => {
      item.test(this.selectedDivId);
    });
  }

  doSelectById(id: string, selected: boolean): void {
      var o = document.getElementById(id);
      if (o !== null) {
          o.style.border = selected ? '2px solid red' : '2px solid white';
      }
  }

  doSelectBySop(imageSop: string): void {
      var imageNum: number = parseInt(imageSop);

      var rowIndex = Math.trunc((imageNum - 1) / this.colNum);
      var colIndex = (imageNum - 1) % this.colNum;

      if (this.selectedDivId !== "") {
          this.doSelectById(this.selectedDivId, false);
      }

      this.selectedDivId = "DivViewer" + rowIndex + colIndex;
      this.doSelectById(this.selectedDivId, true);

  }
}
