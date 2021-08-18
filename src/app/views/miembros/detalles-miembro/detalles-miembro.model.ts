export interface IDetallesMiembroTotals {
  totalsCourses: number;
  totalsReferrals: number;
}

export interface IDetallesMiembro {
  _id: string;
  document: string | null;
  email: string | null;
  phone: string | null;
  names: string | null;
  lastNames: string | null;
  gender: any;
  position: string | null;
  birthday: string | null;
  civilStatus: any;
  educationLevel: any;
  profession: any;
  bloodType: any;
  company: string | boolean | null;
  companyType: any;
  baptized: string | boolean | null;
  roles: any[];
  referred: any;
  consolidated: boolean;
  meetingNew: boolean;
  department: any;
  city: any;
  locality: any;
  direction: any;
  petition: any;
  picture: string|null;
  totals: IDetallesMiembroTotals;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface IDetallesMiembroEdit {
  documentType: string | null;
  document: string | null;
  email: string | null;
  phone: string | null;
  names: string | null;
  lastNames: string | null;
  position: string | null;
  gender: number | string | null;
  birthday: string | null;
  civilStatus: number | string | null;
  educationLevel: number | string | null;
  profession: number | string | null;
  bloodType: number | string | null;
  meetingNew: string | boolean | null;
  company: string | boolean | null;
  companyType: number | string | null;
  baptized: string | boolean | null;
  department: number | string | null;
  city: number | string | null;
  locality: number | string | null;
  direction: number | string | null;
}
