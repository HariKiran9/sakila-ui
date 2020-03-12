import { Component, OnInit } from '@angular/core';
import { Payment } from './payment.modal';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  public payments: Payment[];
  public filterSettings: Object;
  public initialPage: Object;
  public toolbar: string[];

  constructor(private paymentService: PaymentService) {
    this.filterSettings = { type: 'Menu' };
    this.initialPage = { pageSizes: true, pageCount: 4 };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  }

  ngOnInit() {
    this.paymentService.getPayments().subscribe(data => this.payments = data);
  }

}
