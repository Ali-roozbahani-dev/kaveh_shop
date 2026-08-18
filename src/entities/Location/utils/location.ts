import provinces from "@/data/provinces.json";
import cities from "@/data/cities.json";
import { City, Province } from "../types/locations";

export function getProvinces(): Province[] {
  return [...provinces].sort((a, b) =>
    a.name.localeCompare(b.name, "fa")
  );
}

export function getProvince(
  provinceId: number
): Province | undefined {
  return provinces.find(
    (province) => province.id === provinceId
  );
}

export function getProvinceCities(
  provinceId: number
): City[] {
  return cities
    .filter(
      (city) => city.province_id === provinceId
    )
    .sort((a, b) =>
      a.name.localeCompare(b.name, "fa")
    );
}