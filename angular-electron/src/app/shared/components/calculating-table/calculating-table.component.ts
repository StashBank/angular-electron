import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculating-table',
  templateUrl: 'calculating-table.component.html',
  styleUrls: ['calculating-table.component.scss']
})
export class CalculatingTableComponent implements OnInit {

  displayedColumns: string[] = [
    'position',
    'name',
    'vin'
  ];
  data: any[] = [];
  storeKey = 'calculating-table-data';

  ngOnInit(): void {
    this.restoreData();
  }

  onAddRowClick() {
    this.addRow();
  }

  onSaveClick() {
    this.storeData();
  }

  private addRow() {
    const newItem = this.createItem();
    this.data = [...this.data, newItem];
  }

  private createItem(): any {
    const position = this.data && this.data.length + 1 || 1;
    return {position};
  }

  private storeData(): void {
    const dataToStore = JSON.stringify(this.data || []);
    localStorage.setItem(this.storeKey, dataToStore);
  }

  private restoreData(): void {
    const restoredData = localStorage.getItem(this.storeKey);
    if (restoredData) {
      this.data = JSON.parse(restoredData);
    }
  }
}
