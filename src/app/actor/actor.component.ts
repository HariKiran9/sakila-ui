import { Component, OnInit } from '@angular/core';
import { ActorService } from './actor.service';
import { Actor } from './actor.model';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit {

  public actors: Actor[] = [];
  public filterSettings: Object;

  constructor(private actorService: ActorService) { }

  ngOnInit() {
    this.filterSettings = { type: 'Menu' };
    this.getActors();
  }

  public getActors() {
    this.actorService.getActors().subscribe(data => this.actors = data);
  }

}
