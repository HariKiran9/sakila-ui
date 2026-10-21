import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GridModule } from '@syncfusion/ej2-angular-grids'; // Check your exact package name
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';

import { StaffComponent } from './staff.component';
import { StaffRoutingModule } from './staff-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    StaffComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GridModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    StaffRoutingModule
  ],
  providers: [PageService, SortService, FilterService, GroupService]
})
export class StaffModule { }
