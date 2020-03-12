import { Component, OnInit } from '@angular/core';
import { InventoryService } from './inventory.service';
import { Inventory } from './inventory.modal';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  public inventories: Inventory[];
  public filterSettings: Object;
  public initialPage: Object;
  public toolbar: string[];

  constructor(private inventoryService: InventoryService) {
    this.filterSettings = { type: 'Menu' };
    this.initialPage = { pageSizes: true, pageCount: 4 };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  }

  ngOnInit() {
    this.inventoryService.getCustomer().subscribe(data => this.inventories = data);
  }

}
