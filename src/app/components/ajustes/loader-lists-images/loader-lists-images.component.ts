import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-lists-images',
  templateUrl: './loader-lists-images.component.html',
  styleUrls: ['./loader-lists-images.component.scss'],
})
export class LoaderListsImagesComponent implements OnInit {

  itemsLoop = [0, 1, 2, 3, 4];

  constructor() { }

  ngOnInit() {}

}
