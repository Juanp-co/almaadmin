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
      this.member.birthday = this.member.birthday ?
        dayjs(this.member.birthday, 'YYYY-MM-DD', true).locale('es').format('DD [de] MMMM [de] YYYY')
        : null;
      this.member.bloodType = bloodType[this.member.bloodType] || null;
      this.member.profession = professions[this.member.profession] || null;
      this.member.educationLevel = educationLevels[this.member.educationLevel] || null;
      this.member.companyType = companyType[this.member.companyType] || null;
      this.member.civilStatus = civilStatus[this.member.civilStatus] || null;
      this.member.gender = gender[this.member.gender] || null;
      if (this.member.department !== null) {
        const depto = departments[this.member.department] || null;
        if (depto) {
          this.member.department = depto.department;
          if (this.member.city !== null) this.member.city = depto.cities[this.member.city] || null;
        }
      }
      if (typeof this.member.church === 'string') {
        const c = this.churches.find((church: any) => church._id === this.member.church) || null;
        if (c) this.member.church = c.name;
      }
    }
  }

  getRoleValue(): string {
    let ret = 'NO TIENE ASIGNADO NINGÚN ROL.';
    if (this.member) {
      const {roles} = this.member || {};
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
      message: `¿Está seguro qué desea ${this.member.consolidator ? 'quitar' : 'asignar'} a este miembro como consolidador a anónimo?`,
      confirmAction: () => this.handleConsolidator ? this.handleConsolidator() : null
    });
  }

}
