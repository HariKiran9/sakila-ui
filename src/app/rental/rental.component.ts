import { Component, OnInit } from '@angular/core';
import { RentalService } from './rental.service';
import { Rental } from './rental.modal';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss']
})
export class RentalComponent implements OnInit {

  public rentals?: Rental[];
  public filterSettings: object = { type: 'Menu' };
  public initialPage: object = { pageSizes: true, pageCount: 4 };
  public toolbar: string[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

  constructor(private rentalService: RentalService) { }

  ngOnInit() {
    this.rentalService.getRentals().subscribe(data => this.rentals = data);
  }

}