import {Component, Input, OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environment.prod';
import {staticCoords} from '../../../../Utils/data.static';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  @Input() coords: any[];
  @Input() zoom = 17;
  @Input() height = '90vh';
  @Input() showSimpleMarker = true;

  mapbox = (mapboxgl as typeof mapboxgl);
  viewport: any = {
    longitude: null,
    latitude: null,
    zoom: 17,
  };
  coordinates: any[] = [];

  constructor() {
    this.mapbox.accessToken = environment.mapBoxToken;
  }

  ngOnInit() {
    this.getCoord();
    const listCoords = [];

    if (this.coordinates?.length === 1) {
      // set position in the target
      this.viewport.longitude = this.coordinates[0]?.geometry?.coordinates[0] || staticCoords[0];
      this.viewport.latitude = this.coordinates[0]?.geometry?.coordinates[1] || staticCoords[1];
      this.coordinates?.forEach(c => {
        listCoords.push(c);
      });
    }
    else {
      if (this.coordinates.length > 0) {
        this.coordinates.forEach(c => {
          listCoords.push(c);
        });
      }
      // get current coordinates and set the center map
      // center position with the first coordinates
      if (listCoords.length > 2 && listCoords.length < 5) {
        this.viewport.longitude = this.coordinates[1]?.geometry?.coordinates[0] || staticCoords[0];
        this.viewport.latitude = this.coordinates[1]?.geometry?.coordinates[1] || staticCoords[1];
      }
      else {
        this.viewport.longitude = this.coordinates[0]?.geometry?.coordinates[0] || staticCoords[0];
        this.viewport.latitude = this.coordinates[0]?.geometry?.coordinates[1] || staticCoords[1];
      }
    }

    const map = new this.mapbox.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [
        this.viewport.longitude,
        this.viewport.latitude
      ],
      zoom: this.viewport.zoom
    });

    map.on('load', () => {
      map.addSource('places', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: listCoords
        }
      });
    });

    listCoords.forEach((marker) => {
      const { geometry } = marker;
      if (geometry?.coordinates?.length === 2) {
        new mapboxgl.Marker()
          .setLngLat(geometry.coordinates)
          .addTo(map);
      }
    });
  }


  getCoord(){
    if (this.zoom) this.viewport.zoom = this.zoom;
    if (this.coords) this.coordinates = this.coords;
  }
}
