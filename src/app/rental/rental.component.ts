import { Component, ViewChild, AfterViewInit, inject, effect } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { toSignal } from '@angular/core/rxjs-interop';
import { RentalService } from './rental.service';
import { Rental } from './rental.modal';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss']
})
export class RentalComponent implements AfterViewInit {

  private router = inject(Router);
  private rentalService = inject(RentalService);

  displayedColumns: string[] = ['rentalId', 'inventoryfilmtitle', 'inventoryfilmdescription', 'lastUpdate'];
  dataSource = new MatTableDataSource<Rental>([]);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public toolbar: string[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

  // Converts the service Observable into a Signal, handling subscriptions automatically
  rentals = toSignal(this.rentalService.getRentals(), { initialValue: [] });

  constructor() {
    // Automatically updates the table data source whenever the rentals signal emits new data
    effect(() => {
      this.dataSource.data = this.rentals();
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