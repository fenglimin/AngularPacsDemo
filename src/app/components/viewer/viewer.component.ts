import { Component, OnInit, Input } from '@angular/core';
import { Layout } from '../../models/layout';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  Arr = Array; //Array type captured in a variable
    @Input() layout: Layout;

    selectedDivId = "";

  constructor() {
      //this.layout = { rowIndex: 1, colIndex: 1, totalRow: 1, totalCol: 1 };
  }

  ngOnInit() {
  }

  test(id: string): void {
      if (id === this.selectedDivId) {
          alert("find me");
      }
  }


}
