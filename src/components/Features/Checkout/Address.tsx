"use client";
import { useState } from "react";
import {
  Field,
  FieldContent,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { getProvinceCities, getProvinces } from "@/entities/Location/utils/location";

export default function Address() {
  const provinces = getProvinces();  
  const [provinceId, setProvinceId] = useState<string>("");
  const [cityId, setCityId] = useState<string>("");

  const provinceCities = getProvinceCities(Number(provinceId));

  function handleProvinceChange(value: string) {
    setProvinceId(value);

    // با تغییر استان، شهر قبلی پاک شود
    setCityId("");
  }

  return (
    <>
      {/* استان */}
      <Field>
        <FieldLabel htmlFor="province">استان</FieldLabel>

        <FieldContent>
          <Select
            value={provinceId}
            onValueChange={handleProvinceChange}
          >
            <SelectTrigger id="province" className="py-5 rounded-md">
              <SelectValue placeholder="استان را انتخاب کنید" />
            </SelectTrigger>

            <SelectContent>
              {provinces.map((province) => (
                <SelectItem
                  key={province.id}
                  value={String(province.id)}
                >
                  {province.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FieldContent>
      </Field>

      {/* شهر */}
      <Field>
        <FieldLabel htmlFor="city">شهر</FieldLabel>

        <FieldContent>
          <Select
            value={cityId}
            onValueChange={setCityId}
            disabled={!provinceId}
          >
            <SelectTrigger id="city" className="py-5 rounded-md">
              <SelectValue
                placeholder={
                  provinceId
                    ? "شهر را انتخاب کنید"
                    : "ابتدا استان را انتخاب کنید"
                }
              />
            </SelectTrigger>

            <SelectContent>
              {provinceCities.map((city) => (
                <SelectItem
                  key={city.id}
                  value={String(city.id)}
                >
                  {city.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FieldContent>
      </Field>

      {/* کد پستی */}
      <Field>
        <FieldLabel htmlFor="postalCode">کد پستی</FieldLabel>

        <FieldContent>
          <Input
            id="postalCode"
            className="py-5 rounded-md"
            dir="ltr"
            inputMode="numeric"
            placeholder="1234567890"
          />
        </FieldContent>
      </Field>

      {/* آدرس */}
      <Field className="md:col-span-2">
        <FieldLabel htmlFor="address">آدرس</FieldLabel>

        <FieldContent>
          <Input
            id="address"
            className="py-5 rounded-md"
            placeholder="آدرس کامل خود را وارد کنید"
          />
        </FieldContent>
      </Field>
    </>
  );
}