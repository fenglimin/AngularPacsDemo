export class Layout {
  rowIndex: number;
  colIndex: number;
  rowCountParent: number;
  colCountParent: number;
  rowCountChild: number;
  colCountChild: number;
  width: number;
  height: number;

  constructor() {
    this.rowIndex = 0;
    this.colIndex = 0;
    this.rowCountParent = 1;
    this.colCountParent = 1;
    this.rowCountChild = 1;
    this.colCountChild = 1;
    this.width = 1024;
    this.height = 768;

  }
}