import { Component, ViewChild, AfterViewInit, inject, effect } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { toSignal } from '@angular/core/rxjs-interop';
import { Category } from './category.model';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements AfterViewInit {
  private router = inject(Router);
  private categoryService = inject(CategoryService);

  displayedColumns: string[] = ['categoryId', 'name', 'lastUpdate', 'action'];
  dataSource = new MatTableDataSource<Category>([]);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // Converts the service Observable into a Signal, handling subscriptions automatically
  categories = toSignal(this.categoryService.getCategory(), { initialValue: [] });

  constructor() {
    // Automatically updates the table data source whenever the categories signal emits new data
    effect(() => {
      this.dataSource.data = this.categories();
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  editCategory(categoryId: number): void {
    this.router.navigate(['/category/edit', categoryId]);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}