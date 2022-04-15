export interface IResumeProfileModel {
  document: string | null;
  email: string | null;
  phone: string | null;
  names: string | null;
  lastNames: string | null;
  position: string | null;
  gender: string | number | null;
  birthday: string | null;
  civilStatus: string | number | null;
  educationLevel: string | number | null;
  profession: string | number | null;
  bloodType: string | number | null;
  company: boolean | null;
  companyType: string | number | null;
  baptized: boolean | null;
  meetingNew: boolean | null;
  department: string | null;
  city: string | null;
  picture: string | null;
  locality: string | null;
  direction: string | null;
  roles: number[] | null;
}
