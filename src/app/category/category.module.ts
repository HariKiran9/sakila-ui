import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';

import { CategoryComponent } from './category.component';
import { CreateCategoryComponent } from './create.category.component';
import { CategoryRoutingModule } from './category-routing,module';

@NgModule({
  declarations: [
    CategoryComponent,
    CreateCategoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GridModule,
    CategoryRoutingModule
  ],
  providers: [PageService, SortService, FilterService, GroupService]
})
export class CategoryModule { }
