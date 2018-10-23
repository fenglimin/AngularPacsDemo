import { Component, OnInit, Input, AfterViewInit, AfterContentInit } from '@angular/core';
import { Layout } from '../../models/layout';
import { ImageSelectorService } from '../../services/image-selector.service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit, AfterViewInit, AfterContentInit {
  Arr = Array; //Array type captured in a variable
  @Input() layout: Layout;
  subscriptionImageSelection: Subscription;
  subscriptionSubLayoutChange: Subscription;
  divId: string;
  selected:boolean = false;

  constructor(private imageSelectorService: ImageSelectorService) {
    this.subscriptionImageSelection = imageSelectorService.imageSelected$.subscribe(
      layoutId => {
        this.doSelectByLayoutId(layoutId);
      });

    this.subscriptionSubLayoutChange = imageSelectorService.subLayoutChanged$.subscribe(
      subLayoutStyle => {
        this.doChangeSubLayout(subLayoutStyle);
      });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.layout.id === "") {
      this.layout.id = this.layout.id + this.layout.rowIndex + this.layout.colIndex;
    }
    this.divId = "DivViewer" + this.layout.idParent + this.layout.rowIndex + this.layout.colIndex;
  }

  ngAfterContentInit() {
    if (this.layout.id === "") {
      this.layout.id = this.layout.id + this.layout.rowIndex + this.layout.colIndex;
    }
    this.divId = "DivViewer" + this.layout.idParent + this.layout.rowIndex + this.layout.colIndex;
  }
  test(id: string): void {

  }

  onSelected(): void {
    this.selected = true;
    this.doSelectById(this.divId, true);

    //var imageSop = this.layout.rowIndex * this.layout.colCountParent + this.layout.colIndex + 1;
    this.imageSelectorService.selectImage(this.layout.idParent + this.layout.id);

  }

  doSelectById(id: string, selected: boolean): void {
    const o = document.getElementById(id);
    if (o !== undefined && o !== null) {
      o.style.border = selected ? '2px solid red' : '2px solid white';
    }
  }

  doSelectBySop(imageSop: string): void {
    var imageNum: number = parseInt(imageSop);
    var rowIndex = Math.trunc((imageNum - 1) / this.layout.colCountParent);
    var colIndex = (imageNum - 1) % this.layout.colCountParent;
    var selectedDivId = "DivViewer" + rowIndex + colIndex;
    this.selected = this.divId === selectedDivId;

    this.doSelectById(this.divId, this.selected);
  }

  doSelectByLayoutId(layoutId: string): void {
    var selectedDivId = "DivViewer" + layoutId;
    this.selected = this.divId === selectedDivId;

    this.doSelectById(this.divId, this.selected);
  }

  doChangeSubLayout(subLayoutStyle: number): void {
    if (this.selected) {
      this.layout.rowCountChild = Math.trunc(subLayoutStyle / 10);
      this.layout.colCountChild = subLayoutStyle % 10;
    }
  }
}
