import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { Routes, RouterModule } from '@angular/router';

import { CityComponent } from './city.component';

const cityRoutes: Routes = [
  {
    path: 'city', children: [
      { path: '', component: CityComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(cityRoutes)
  ],
  providers: [PageService, SortService, FilterService, GroupService]
})
export class CityRoutingModule { }
