import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.scss'],
})
export class FilesUploadComponent implements OnInit {

  @Input() showInImg = false;
  @Input() height: string|number|null = null;
  @Input() picture: string|null = null;
  @Input() handleSave: (value: string|null) => void;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {}



  openFile(event) {
    const files = event.target.files;

    if (typeof files[0] !== 'object') return false;
    else {
      this.dataService.resizePhoto(files[0], 900, 'dataURL',  (resizedFile) => {
        // this.picture = resizedFile;
        if (!!this.handleSave) this.handleSave(resizedFile);
      });
    }
  }

}
