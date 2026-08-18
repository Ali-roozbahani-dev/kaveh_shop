"use client";

import { Input } from "@/components/ui/input";
import {
  Field,
  FieldContent,
  FieldLabel,
} from "@/components/ui/field";
import PaymentMethods from "./PaymentMethods";
import OrderNote from "./OrderNote";
import Address from "./Address";


export default function CheckoutForm() {
  return (
    <>
      <section className="rounded-xl border bg-background p-6">      

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="firstName">نام</FieldLabel>

            <FieldContent>
              <Input 
              id="firstName" 
              className="py-5 rounded-md" 
              placeholder="نام خود را وارد کنید" 
              />
            </FieldContent>
          </Field>

          <Field>
            <FieldLabel htmlFor="lastName">نام خانوادگی</FieldLabel>

            <FieldContent>
              <Input
                className="py-5 rounded-md"
                id="lastName"
                placeholder="نام خانوادگی خود را وارد کنید"
              />
            </FieldContent>
          </Field>

          <Field>
            <FieldLabel htmlFor="phone">شماره موبایل</FieldLabel>

            <FieldContent>
              <Input
                className="py-5 rounded-md"
                id="phone"
                dir="ltr"
                inputMode="numeric"
                placeholder="09123456789"
              />
            </FieldContent>
          </Field>

          <Field>
            <FieldLabel htmlFor="email">ایمیل (اختیاری)</FieldLabel>

            <FieldContent>
              <Input
                className="py-5 rounded-md"
                id="email"
                type="email"
                dir="ltr"
                placeholder="example@gmail.com"
              />
            </FieldContent>
          </Field>

          <Address />
          
        </div>
      </section>
      <PaymentMethods />
      <OrderNote />      
    </>
  );
}
