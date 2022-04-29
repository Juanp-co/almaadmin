import {Component, Input, OnInit} from '@angular/core';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import {departments} from '../../../../Utils/locations.data';
import {
  bloodType,
  civilStatus,
  companyType, documentType,
  educationLevels,
  gender,
  professions,
  rolesListSingleText
} from '../../../../Utils/profile.data';
import {GlobalService} from '../../../services/global.service';
import {CookiesService} from '../../../services/cookies.service';

@Component({
  selector: 'app-resume-profile',
  templateUrl: './resume-profile.component.html',
  styleUrls: ['./resume-profile.component.scss'],
})
export class ResumeProfileComponent implements OnInit {

  @Input() member: any;
  @Input() data: any;
  @Input() handleConsolidator: () => void;

  documentTypes: any[] = [];
  educationLevel: any[] = [];
  professions: any[] = [];
  bloodType: any[] = [];
  companyType: any[] = [];
  civilStatus: any[] = [];
  gender: any[] = [];
  churches: any[] = [];

  constructor(
    private cookiesService: CookiesService,
    private globalSer: GlobalService
  ) {
    this.documentTypes = documentType;
    this.educationLevel = educationLevels;
    this.professions = professions;
    this.bloodType = bloodType;
    this.companyType = companyType;
    this.civilStatus = civilStatus;
    this.gender = gender;
  }

  async ngOnInit() {
    this.churches = await this.cookiesService.getCookie('churches');
    if (this.member) {
      this.data = this.globalSer.copyObjectParse(this.member);
      this.data.birthday = this.data.birthday ?
        dayjs(this.data.birthday, 'YYYY-MM-DD', true).locale('es').format('DD [de] MMMM [de] YYYY')
        : null;
      this.data.bloodType = bloodType[this.data.bloodType] || null;
      this.data.profession = professions[this.data.profession] || null;
      this.data.educationLevel = educationLevels[this.data.educationLevel] || null;
      this.data.companyType = companyType[this.data.companyType] || null;
      this.data.civilStatus = civilStatus[this.data.civilStatus] || null;
      this.data.gender = gender[this.data.gender] || null;
      if (this.data.department !== null) {
        const depto = departments[this.data.department] || null;
        if (depto) {
          this.data.department = depto.department;
          if (this.data.city !== null) this.data.city = depto.cities[this.data.city] || null;
        }
      }
      if (this.data.created_at) {
        this.data.created_at = dayjs.unix(this.data.created_at).locale('es').format('ddd, DD [de] MMM [de] YYYY');
      }
      if (typeof this.data.church === 'string') {
        const c = this.churches.find((church: any) => church._id === this.data.church) || null;
        if (c) this.data.church = c.name;
      }
    }
  }

  getRoleValue(): string {
    let ret = 'NO TIENE ASIGNADO NINGÚN ROL.';
    if (this.data) {
      const {roles} = this.data || {};
      if (roles?.length > 0) {
        ret = '';
        for (const v of roles) {
          if (ret === '') ret = rolesListSingleText[v];
          else ret += `, ${rolesListSingleText[v]}`;
        }
      }
    }
    return ret;
  }

  async confirmConsolidator() {
    await this.globalSer.alertConfirm({
      header: '¡Confirme!',
      message: `¿Está seguro qué desea ${this.data.consolidator ? 'quitar' : 'asignar'} a este miembro como consolidador a anónimo?`,
      confirmAction: () => this.handleConsolidator ? this.handleConsolidator() : null
    });
  }

}
