import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.page.html',
  styleUrls: ['./vendors.page.scss'],
})
export class VendorsPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  }
  constructor() { }

  ngOnInit() {
  }

}
