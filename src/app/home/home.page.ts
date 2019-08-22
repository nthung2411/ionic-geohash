import { Component, ViewChild, ElementRef } from '@angular/core';

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: any;

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    const latLng = new google.maps.LatLng(-34.9290, 138.6010);

    const mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }
}
