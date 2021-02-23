import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  resizePhoto(file, maxSize, outputType, callback) {
    const reader: any = new FileReader();
    reader.onload = (readerEvent: any) => {
      this.resizeReresize(readerEvent.target.result, maxSize, outputType, callback);
    };
    reader.readAsDataURL(file);
  }

  resizeReresize(dataURL, maxSize, outputType, callback) {
    const image = new Image();
    image.onload = (imageEvent) => {

      // Resize image
      const canvas = document.createElement('canvas');
      let width = image.width;
      let height = image.height;
      if (width > height) {
        if (width > maxSize) {
          height *= maxSize / width;
          width = maxSize;
        }
      }
      else if (height > maxSize) {
        width *= maxSize / height;
        height = maxSize;
      }
      canvas.width = width;
      canvas.height = height;
      canvas.getContext('2d').drawImage(image, 0, 0, width, height);

      this.resizeOuput(canvas, outputType, callback);
    };
    image.src = dataURL;

  }

  resizeOuput(canvas, outputType, callback) {
    switch (outputType) {
      case 'file':
        canvas.toBlob( (blob) => {
          callback(blob);
        }, 'image/jpeg', 0.8);
        break;
      case 'dataURL':
        callback(canvas.toDataURL('image/jpeg', 0.8));
        break;
    }

  }
}
