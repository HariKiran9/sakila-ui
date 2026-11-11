import { Component, ViewChild, AfterViewInit, inject, effect } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { toSignal } from '@angular/core/rxjs-interop';
import { Payment } from './payment.modal';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements AfterViewInit {

 
  private paymentService = inject(PaymentService);

  displayedColumns: string[] = ['paymentId', 'customerfirstName', 'customerlastName', 'lastUpdate'];
  dataSource = new MatTableDataSource<Payment>([]);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // Converts the service Observable into a Signal, handling subscriptions automatically
  payments = toSignal( this.paymentService.getPayments(), { initialValue: [] });

  constructor() {
    // Automatically updates the table data source whenever the categories signal emits new data
    effect(() => {
      this.dataSource.data = this.payments();
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