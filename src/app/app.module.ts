import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { CategoryModule } from './category/category.module';
import { CityModule } from './city/city.module';
import { StaffModule } from './staff/staff.module';

import { AppComponent } from './app.component';
import { AppTopBarComponent } from './app-top-bar/app-top-bar.component';
import { ActorComponent } from './actor/actor.component';
import { FilmComponent } from './film/film.component';
import { CustomerComponent } from './customer/customer.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PaymentComponent } from './payment/payment.component';
import { RentalComponent } from './rental/rental.component';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout.component';
import { LoginService } from './login/login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AppTopBarComponent,
    ActorComponent,
    FilmComponent,
    CustomerComponent,
    InventoryComponent,
    PaymentComponent,
    RentalComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    CategoryModule,
    CityModule,
    StaffModule,
    AppRoutingModule,
    HttpClientModule,
    GridModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [PageService, SortService, FilterService, GroupService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
