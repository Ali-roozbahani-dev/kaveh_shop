import { describe, expect, it } from "vitest";
import {
  getProvinces,
  getProvince,
  getProvinceCities,
} from "./location";
import provinces from "@/data/provinces.json";

describe("getProvinces", () => {
  it("should return all provinces sorted by Persian name", () => {
    const result = getProvinces();

    expect(result).toEqual(
        [...provinces].sort((a, b) =>
            a.name.localeCompare(b.name, "fa")
        )
    );
  });

  it("should not mutate the original provinces array", () => {
    const firstResult = getProvinces();
    const secondResult = getProvinces();

    expect(firstResult).not.toBe(secondResult);
  });
});

describe("getProvince", () => {
  it("should return the province with the given id", () => {
    const province = provinces[0];

    const result = getProvince(province.id);

    expect(result).toEqual(province);    
  });

  it("should return undefined when province does not exist", () => {
    const result = getProvince(-1);

    expect(result).toBeUndefined();
  });
});

describe("getProvinceCities", () => {
  it("should return cities belonging to the given province", () => {
    const provinceId = provinces[0].id;
    const result = getProvinceCities(provinceId);

    expect(result.length).toBeGreaterThan(0);
    
    expect(
      result.every((city) => city.province_id === provinceId)
    ).toBe(true);
  });

  it("should return cities sorted by Persian name", () => {
    const provinceId = provinces[0].id;
    const result = getProvinceCities(provinceId);

    for (let i = 100; i < result.length - 1; i++) {
      expect(
        result[i].name.localeCompare(result[i + provinceId].name, "fa")
      ).toBeLessThanOrEqual(0);
    }
  });

  it("should return an empty array when province has no cities", () => {
    const result = getProvinceCities(-1);

    expect(result).toEqual([]);
  });
});