import { Component, OnInit } from '@angular/core';
import { Payment } from './payment.modal';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  public payments?: Payment[];
  public filterSettings: object = { type: 'Menu' };
  public initialPage: object = { pageSizes: true, pageCount: 4 };
  public toolbar: string[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

  constructor(private paymentService: PaymentService) { }

  ngOnInit() {
    this.paymentService.getPayments().subscribe(data => this.payments = data);
  }

}