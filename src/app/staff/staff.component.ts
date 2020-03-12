import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StaffService } from './staff.service';
import { Staff } from './staff.model';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  public staff: Staff[];
  public filterSettings: Object;
  public initialPage: Object;
  public toolbar: string[];

  constructor(private router: Router, private staffService: StaffService) {
    this.filterSettings = { type: 'Menu' };
    this.initialPage = { pageSizes: true, pageCount: 4 };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  }

  ngOnInit() {
    this.staffService.getStaff().subscribe(data => this.staff = data);
  }

  public create() {
    console.log('[StaffComponent]..create..');
    this.router.navigateByUrl("/createStaff");
  }

}
