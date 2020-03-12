import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';

import { CityComponent } from './city.component';
import { CityRoutingModule } from './city-routing.module';


@NgModule({
    declarations: [CityComponent],
    bootstrap: [],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        GridModule,
        CityRoutingModule
    ],
    providers: [PageService, SortService, FilterService, GroupService]
})
export class CityModule { } 