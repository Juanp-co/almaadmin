import {Component, Input, OnInit} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { staticCoords } from '../../../../Utils/data.static';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-map-2',
  templateUrl: './map2.component.html',
  styleUrls: ['./map2.component.scss'],
})
export class Map2Component implements OnInit {

  @Input() coords: any[];
  @Input() zoom: number;
  @Input() height = '90vh';
  @Input() showSimpleMarker = true;
  @Input() handleSave: (value: number[]) => void;

  mapbox = (mapboxgl as typeof mapboxgl);
  viewport: any = {
    longitude: null,
    latitude: null,
    zoom: 8,
  };
  coordinates: any[] = [];
  formData: any = {
    address: null,
    location: {
      type: 'Point',
      coordinates: []
    },
  };

  constructor() {
    this.mapbox.accessToken = environment.mapBoxToken;
  }

  ngOnInit() {
    this.getCoord();
    const listCoords = [];

    this.viewport.longitude = this.coordinates[0]?.geometry?.coordinates[0] || staticCoords[0];
    this.viewport.latitude = this.coordinates[0]?.geometry?.coordinates[1] || staticCoords[1];
    this.coordinates?.forEach(c => {
      listCoords.push(c);
    });

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

    const marker = new mapboxgl.Marker({
      draggable: true
    })
      .setLngLat([
        this.viewport.longitude,
        this.viewport.latitude
      ])
      .addTo(map);

    const onDragEnd = () => {
      const lngLat: any = marker.getLngLat();
      this.handleSave([lngLat?.lng || 0, lngLat?.lat || 0]);
      // this.formData.location.coordinates = [lngLat?.lng || 0, lngLat?.lat || 0];
    };

    marker.on('dragend', onDragEnd);
  }

  getCoord(){
    if (this.zoom) this.viewport.zoom = this.zoom;
    if (this.coords) this.coordinates = this.coords;
  }
}
