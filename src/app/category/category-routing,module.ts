import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category.component';
import { CreateCategoryComponent } from './create.category.component';

const categoryRoutes: Routes = [
    {
        path: 'category', children: [
            { path: '', component: CategoryComponent, data: { title: 'Category List' } },
            { path: 'create', component: CreateCategoryComponent, data: { title: 'Create Category' } },
            { path: 'edit/:id', component: CreateCategoryComponent, data: { title: 'Edit Category' } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(categoryRoutes)
    ],
    exports: [RouterModule]
})
export class CategoryRoutingModule { }
