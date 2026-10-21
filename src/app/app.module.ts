import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Syncfusion Grid module and feature services
import { 
  GridModule, 
  FilterService, 
  PageService, 
  SortService, 
  ToolbarService,
  GroupService
} from '@syncfusion/ej2-angular-grids';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { ActorModule } from './actor/actor.module';
import { CategoryModule } from './category/category.module';
import { CityModule } from './city/city.module';
import { StaffModule } from './staff/staff.module';

import { AppComponent } from './app.component';
import { AppTopBarComponent } from './app-top-bar/app-top-bar.component';
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
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    AppTopBarComponent,
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
    ActorModule,
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
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule

  ],
  providers: [PageService, SortService, FilterService, GroupService, LoginService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
