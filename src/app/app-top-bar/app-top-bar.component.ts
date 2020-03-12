import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-top-bar',
  templateUrl: './app-top-bar.component.html',
  styleUrls: ['./app-top-bar.component.scss']
})
export class AppTopBarComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  public city() {
    console.log('[AppTopBarComponent]..city..');
    this.router.navigateByUrl('/city');
  }

  public actor() {
    console.log('[AppTopBarComponent]..actor..');
    this.router.navigateByUrl('/actor');
  }

  public category() {
    console.log('[AppTopBarComponent]..category..');
    this.router.navigateByUrl('/category');
  }

  public staff() {
    console.log('[AppTopBarComponent]..staff..');
    this.router.navigateByUrl('/staff');
  }

  public film() {
    console.log('[AppTopBarComponent]..film..');
    this.router.navigateByUrl('/film');
  }

  public customer() {
    console.log('[AppTopBarComponent]..customer..');
    this.router.navigateByUrl('/customer');
  }

  public inventory() {
    console.log('[AppTopBarComponent]..inventory..');
    this.router.navigateByUrl('/inventory');
  }

  public rental() {
    console.log('[AppTopBarComponent]..rental..');
    this.router.navigateByUrl('/rental');
  }

  public payment() {
    console.log('[AppTopBarComponent]..payment..');
    this.router.navigateByUrl('/payment');
  }
}
