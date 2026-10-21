import { Component, ViewChild, AfterViewInit, inject, effect } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { toSignal } from '@angular/core/rxjs-interop';
import { CustomerService } from './customer.service';
import { Customer } from './customer.modal';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements AfterViewInit {
  private customerService = inject(CustomerService);

  displayedColumns: string[] = [
    'customerId',
    'firstName',
    'lastName',
    'staffFirstName',
    'staffLastName',
    'address',
    'district',
    'city',
    'country',
    'lastUpdate'
  ];

  dataSource = new MatTableDataSource<Customer>([]);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // Modern Signal approach to handle data fetching reactivity and cleanup
  customers = toSignal(this.customerService.getCustomer(), { initialValue: [] });

  constructor() {
    effect(() => {
      this.dataSource.data = this.customers();
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