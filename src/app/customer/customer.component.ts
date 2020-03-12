import { Component, OnInit } from '@angular/core';

import { CustomerService } from './customer.service';
import { Customer } from './customer.modal';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  public customers: Customer[];
  public filterSettings: Object;
  public initialPage: Object;
  public toolbar: string[];

  constructor(private customerService: CustomerService) {
    this.filterSettings = { type: 'Menu' };
    this.initialPage = { pageSizes: true, pageCount: 4 };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  }

  ngOnInit() {
    this.customerService.getCustomer().subscribe(data => this.customers = data);
  }

}
