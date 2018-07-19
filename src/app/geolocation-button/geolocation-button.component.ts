import { GeolocationService } from './../services/geolocation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geolocation-button',
  templateUrl: './geolocation-button.component.html',
  styleUrls: ['./geolocation-button.component.sass']
})
export class GeolocationButtonComponent implements OnInit {

  active : boolean = false;

  constructor(public geolocationService: GeolocationService) { }

  ngOnInit() {
    this.geolocationService.permission$.then((status) => { 
      // alert(status)
      this.active = (status == 'granted')

    if(this.active)
    this.geolocationService.requestGeolocation();
    });
  }

}
