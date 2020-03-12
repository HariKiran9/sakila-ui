import { Component, OnInit, OnDestroy } from '@angular/core';
import { CityService } from './city.service';
import { City } from './city.model';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit, OnDestroy {

  public cities: City[] = [];
  public filterSettings: Object;
  public initialPage: Object;
  public toolbar: string[];

  public policies = [
    { "id": "2", "name": "policy002" },
    { "id": "3", "name": "policy003" },
    { "id": "4", "name": "policy004" },
    { "id": "5", "name": "policy005" }
  ];

  constructor(private cityService: CityService) {
    console.log('..contructor..');
  }

  ngOnInit() {
    console.log('..ngOnInit..');
    this.filterSettings = { type: 'Menu' };
    this.initialPage = { pageSizes: true, pageCount: 4 };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.cityService.getCities2().subscribe(response => this.cities = response);
  }

  public getCities() {
    console.log('..getCities..');
    this.cityService.getCities().subscribe(response => {
      response.forEach(function (value, key) {
        var city = new City();
        city.city = value.city;
        city.cityId = value.cityId;
        city.lastUpdate = value.lastUpdate;
        this.cities[key] = city;
      }, this.cities);
      console.log('Response : ', response);
    }), error => console.log('Error downloading the file'), () => console.info('File downloaded successfully');
  }//getCities



  public ngOnDestroy() {
    console.log('..ngOnDestroy..', this.cities);
  }

}//class
