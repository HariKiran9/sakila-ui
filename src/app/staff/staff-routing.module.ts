import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff.component';


const staffRoutes: Routes = [
  {
    path: 'staff', children: [
      { path: '', component: StaffComponent, data: { title: 'Staff List' } },
      { path: 'createStaff', component: StaffComponent, data: { title: 'Staff List' } }
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(staffRoutes)
  ]
})
export class StaffRoutingModule { }
