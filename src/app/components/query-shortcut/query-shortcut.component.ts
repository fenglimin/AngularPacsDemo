import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Shortcut } from '../../models/shortcut';

@Component({
  selector: 'app-query-shortcut',
  templateUrl: './query-shortcut.component.html',
  styleUrls: ['./query-shortcut.component.css']
})
export class QueryShortcutComponent implements OnInit {

  @Output() selected = new EventEmitter<Shortcut>();

  allShortcuts: Shortcut[] = [
    { id: 11, name: 'Default' },
    { id: 12, name: 'Today' },
    { id: 13, name: 'All CR' }
    ];

  constructor() { }

  ngOnInit() {
  }

  doQuery(shortcut: Shortcut): void {
    this.selected.emit(shortcut);
  }
}
