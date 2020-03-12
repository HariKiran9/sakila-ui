import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';

import { StaffComponent } from './staff.component';
import { StaffRoutingModule } from './staff-routing.module';

@NgModule({
  declarations: [
    StaffComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GridModule,
    StaffRoutingModule
  ],
  providers: [PageService, SortService, FilterService, GroupService]
})
export class StaffModule { }
