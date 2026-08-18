export interface Province {
  id: number;
  name: string;
  slug: string;
  tel_prefix: string;
}

export interface City {
  id: number;
  province_id: number;
  name: string;
  slug: string;
  county_id: number;
}