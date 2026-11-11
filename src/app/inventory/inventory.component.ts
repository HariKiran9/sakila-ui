import { Component, ViewChild, AfterViewInit, inject, effect } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { toSignal } from '@angular/core/rxjs-interop';

import { InventoryService } from './inventory.service';
import { Inventory } from './inventory.modal';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {

  private inventoryService = inject(InventoryService);

  displayedColumns: string[] = [
    'inventoryId',
    'filmtitle',
    'filmdescription',
    'staffFirstName',
    'staffLastName',
    'address',    
    'district',
    'city',  
    'country',  
    'lastUpdate'
  ];

  dataSource = new MatTableDataSource<Inventory>([]);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // Modern Signal approach to handle data fetching reactivity and cleanup
  inventory = toSignal(this.inventoryService.getInventory(), { initialValue: [] });

  constructor() {
    effect(() => {
      this.dataSource.data = this.inventory();
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}