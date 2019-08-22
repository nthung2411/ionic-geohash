import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import ngeohash from 'ngeohash';

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: any;

  ngAfterViewInit(): void {
    this.loadMap();

    const hash = ngeohash.encode(-34.9290, 138.6010, 1);
    const neighbors: Array<string> = ngeohash.neighbors(hash);
    console.log(hash);
    console.log(neighbors);

    neighbors.forEach(neighbor => {
      const location = ngeohash.decode(neighbor);
      console.log(location);
      const marker = new google.maps.Marker({
        position: { lat: location.latitude, lng: location.longitude },
        title: `${neighbor}`
      });
      marker.setMap(this.map);
    });
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
