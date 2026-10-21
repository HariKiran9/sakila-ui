import { Component, ViewChild, AfterViewInit, inject, effect } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActorService } from './actor.service';
import { Actor } from './actor.model';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements AfterViewInit {
  private actorService = inject(ActorService);

  displayedColumns: string[] = ['actorId', 'firstName', 'lastName', 'lastUpdate'];
  dataSource = new MatTableDataSource<Actor>([]);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // Converts the service Observable into a Signal, handling subscriptions automatically
  actors = toSignal(this.actorService.getActors(), { initialValue: [] });

  constructor() {
    // Automatically updates the table data source whenever the actors signal emits new data
    effect(() => {
      this.dataSource.data = this.actors();
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