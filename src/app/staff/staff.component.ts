import { Component, ViewChild, AfterViewInit, inject, effect } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { toSignal } from '@angular/core/rxjs-interop';

import { StaffService } from './staff.service';
import { Staff } from './staff.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements AfterViewInit {
  private router = inject(Router);
  private staffService = inject(StaffService);
  displayedColumns: string[] = [
    'staffId',
    'firstName',
    'lastName',
    'email',
    'active',
    'userName',
    'password',
    'address',
    'district',
    'city',
    'country',
    'lastUpdate'
  ];


  dataSource = new MatTableDataSource<Staff>([]);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // Modern Signal approach to handle data fetching reactivity and cleanup
  staff = toSignal(this.staffService.getStaff(), { initialValue: [] });
  constructor() {
    effect(() => {
      console.log('[StaffComponent]..effect..staff changed:', this.staff());
      this.dataSource.data = this.staff();
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

  public create() {
    console.log('[StaffComponent]..create..');
    this.router.navigateByUrl("/createStaff");
  }

}
