import { Component, OnInit, Input } from '@angular/core';
import { Layout } from '../../models/layout';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
    @Input() layout: Layout;
    @Input() hasSubLayout: boolean;
    @Input() subLayout: Layout;

    row = new Array(1);
    col = new Array(1);
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
