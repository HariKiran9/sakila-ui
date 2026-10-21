import { Component, ViewChild, AfterViewInit, inject, effect } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { toSignal } from '@angular/core/rxjs-interop';
import { FilmService } from './film.service';
import { Film } from './film.model';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements AfterViewInit {
  private filmService = inject(FilmService);
  displayedColumns: string[] = [
    'filmId',
    'title',
    'description',
    'rating',
    'language',
    'specialFeatures',
    'lastUpdate'
  ];


  dataSource = new MatTableDataSource<Film>([]);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // Modern Signal approach to handle data fetching reactivity and cleanup
  films = toSignal(this.filmService.getFilms(), { initialValue: [] });
  constructor() {
    effect(() => {
      this.dataSource.data = this.films();
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
