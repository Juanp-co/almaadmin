export interface IMiembros {
  _id: string;
  document: string | null;
  names: string | null;
  lastNames: string | null;
  gender: number | null;
  phone: string | null;
  roles: number[];
  created_at: string | null;
}
