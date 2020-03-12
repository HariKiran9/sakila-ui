import { Component, OnInit } from '@angular/core';
import { RentalService } from './rental.service';
import { Rental } from './rental.modal';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss']
})
export class RentalComponent implements OnInit {

  public rentals: Rental[];
  public filterSettings: Object;
  public initialPage: Object;
  public toolbar: string[];

  constructor(private rentalService: RentalService) {
    this.filterSettings = { type: 'Menu' };
    this.initialPage = { pageSizes: true, pageCount: 4 };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  }

  ngOnInit() {
    this.rentalService.getRentals().subscribe(data => this.rentals = data);
  }

}
