import { Component, ViewChild, AfterViewInit, inject, effect } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { toSignal } from '@angular/core/rxjs-interop';
import { CityService } from './city.service';
import { City } from './city.model';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements AfterViewInit {
  private cityService = inject(CityService);
  displayedColumns: string[] = [
    'cityId',
    'city',
    'country',
    'lastUpdate'
  ];


  dataSource = new MatTableDataSource<City>([]);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // Modern Signal approach to handle data fetching reactivity and cleanup
  cities = toSignal(this.cityService.getCities(), { initialValue: [] });
  constructor() {
    effect(() => {
      this.dataSource.data = this.cities();
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



}//class
