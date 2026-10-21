import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';

import { CategoryComponent } from './category.component';
import { CreateCategoryComponent } from './create.category.component';
import { CategoryRoutingModule } from './category-routing,module';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    CategoryComponent,
    CreateCategoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GridModule,
    CategoryRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [PageService, SortService, FilterService, GroupService]
})
export class CategoryModule { }
