import { Component, OnInit } from '@angular/core';
import { FilmService } from './film.service';
import { Film } from './film.model';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  public films: Film[];
  public filterSettings: Object;
  public initialPage: Object;
  public toolbar: string[];

  constructor(private filmService: FilmService) {
    this.filterSettings = { type: 'Menu' };
    this.initialPage = { pageSizes: true, pageCount: 4 };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  }

  ngOnInit() {
    this.filmService.getStaff().subscribe(data => this.films = data);
  }

}
