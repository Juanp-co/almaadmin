import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {

  @Input() totalPages;
  @Input() currentPage;
  @Input() handlePage: (args: number) => void;
  model: any = {
    totalPages: 0,
    currentPage: 1
  };

  constructor() {
    this.loadParams();
  }

  ngOnInit() {
    this.loadParams();
  }

  loadParams() {
    this.model.currentPage = typeof this.currentPage === 'string' ? Number.parseInt(`${this.currentPage}`, 10) : this.currentPage;
    this.model.totalPages = typeof this.totalPages === 'string' ? Number.parseInt(`${this.totalPages}`, 10) : this.totalPages;
  }

  onChangePage(increment: boolean) {
    if (increment) {
      this.model.currentPage = this.model.currentPage + 1;
      if (this.model.currentPage <= 0 || this.model.currentPage >= this.totalPages || Number.isNaN(this.model.currentPage)) {
        this.model.currentPage = this.model.totalPages;
      }
    }
    else {
      this.model.currentPage = this.model.currentPage - 1;
      if (this.model.currentPage <= 0 || Number.isNaN(this.model.currentPage)) {
        this.model.currentPage = 1;
      }
    }
    this.handlePage(this.model.currentPage);
  }

}
