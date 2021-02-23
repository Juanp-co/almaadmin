import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-group-card',
  templateUrl: './user-group-card.component.html',
  styleUrls: ['./user-group-card.component.scss'],
})
export class UserGroupCardComponent implements OnInit {

  @Input() added = false;
  @Input() user: any;
  @Input() handleDelete: (args: string) => void;
  @Input() handleAdd: (args: string) => void;
  @Input() handleRemove: (args: string) => void;
  @Input() showButtonDetails = false;
  u: any = null;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if (this.user) {
      this.u = {
        _id: this.user._id,
        fullName: `${this.user.names} ${this.user.lastNames}`,
        document: this.user.document,
        phone: this.user.phone,
        gender: this.user.gender,
      };
    }
  }

  async goToDetails(id: string) {
    await this.router.navigate([`miembros/${id}`]);
  }

}
