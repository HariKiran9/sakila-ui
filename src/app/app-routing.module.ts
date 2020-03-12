import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home.component';
import { ActorComponent } from './actor/actor.component';
import { FilmComponent } from './film/film.component';
import { CustomerComponent } from './customer/customer.component';
import { InventoryComponent } from './inventory/inventory.component';
import { RentalComponent } from './rental/rental.component';
import { PaymentComponent } from './payment/payment.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { CustomePreLoadingService } from './custome-pre-loading.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout.component';
import { LoginService } from './login/login.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'actor', component: ActorComponent, data: { title: 'Actor List' } },
  { path: 'category', data: { preload: true }, loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },
  { path: 'city', data: { preload: true }, loadChildren: () => import('./city/city.module').then(m => m.CityModule) },
  { path: 'film', component: FilmComponent, data: { title: 'Film List' } },
  { path: 'customer', component: CustomerComponent, data: { title: 'Customer List' } },
  { path: 'inventory', component: InventoryComponent, data: { title: 'Inventory List' } },
  { path: 'rental', component: RentalComponent, data: { title: 'Rental List' } },
  { path: 'staff', data: { preload: true }, loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule) },
  { path: 'payment', component: PaymentComponent, data: { title: 'Payment List' } },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
// { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },
//{ path: 'lazymodule', loadChildren: './lazymodule/lazymodule.module#LazyModuleModule' } --> Angular 6

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: CustomePreLoadingService })// <-- debugging purposes only
  ],
  providers: [LoginService],
  exports: [RouterModule]
})
// { enableTracing: false }, 
export class AppRoutingModule { }
