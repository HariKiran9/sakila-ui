import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActorComponent } from './actor.component';
import { CreateActorComponent } from './create.actor.component';

const actorRoutes: Routes = [
    {
        path: 'actor', children: [
            { path: '', component: ActorComponent, data: { title: 'Actor List' } },
            { path: 'create', component: CreateActorComponent, data: { title: 'Create Actor' } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(actorRoutes)
    ],
    exports: [RouterModule]
})
export class ActorRoutingModule { }
