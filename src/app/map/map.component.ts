import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  latitude = 49.85;
  longitude = 24.0166666667;

  onMapMarker(event) {
    console.log(event);
  }
  constructor() { }

  ngOnInit() {
  }

}
