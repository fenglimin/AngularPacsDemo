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
  totalRow = 1;
  totalCol = 1;
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

  }

  onLayoutChanged(newLayout:number): void {
    this.totalRow = Math.trunc(newLayout / 10);
    this.totalCol = newLayout % 10;
  }

  doSelectById(id: string, selected: boolean): void {
    const o = document.getElementById(id);
    if (o !== undefined && o !== null) {
          o.style.border = selected ? '2px solid red' : '2px solid white';
      }
  }

  doSelectBySop(imageSop: string): void {
      var imageNum: number = parseInt(imageSop);

      var rowIndex = Math.trunc((imageNum - 1) / this.totalCol);
      var colIndex = (imageNum - 1) % this.totalCol;

      if (this.selectedDivId !== "") {
          this.doSelectById(this.selectedDivId, false);
      }

      this.selectedDivId = "DivViewer" + rowIndex + colIndex;
      this.doSelectById(this.selectedDivId, true);

  }
}
