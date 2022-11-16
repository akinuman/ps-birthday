export interface IConvertedPersons {
  fullName: string;
  id: number;
  distance: number;
  longitude: string;
  latitude: string;
}

export interface IRawPerson {
  partner_id: number;
  longitude: string;
  latitude: string;
  name: string;
}
