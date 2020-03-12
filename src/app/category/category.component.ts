import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { Category } from './category.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public category: Category[] = [];
  public filterSettings: Object;
  public initialPage: Object;
  public toolbar: string[];

  constructor(private router: Router, private categoryService: CategoryService) {
    this.filterSettings = { type: 'Menu' };
    this.initialPage = { pageSizes: true, pageCount: 4 };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  }

  ngOnInit() {
    this.categoryService.getCategory().subscribe(response => this.category = response, (err) => console.log(err));
  }

  editCategory(categoryId: number) {
    console.log('Category Id : ', categoryId);
    this.router.navigate(['/category/edit', categoryId]);
  }

}
