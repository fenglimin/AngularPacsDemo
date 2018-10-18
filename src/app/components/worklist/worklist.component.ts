import { Component, OnInit, Input } from '@angular/core';
import { Shortcut } from '../../models/shortcut';


@Component({
  selector: 'app-worklist',
  templateUrl: './worklist.component.html',
  styleUrls: ['./worklist.component.css']
})
export class WorklistComponent implements OnInit {
  @Input() shortcut: Shortcut;

  constructor() { }

  ngOnInit() {
  }

}
