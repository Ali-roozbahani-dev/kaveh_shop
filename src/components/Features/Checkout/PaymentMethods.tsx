import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function PaymentMethods() {
  return (
    <section className="rounded-xl border bg-background p-6 mt-5" dir="rtl">
      <h2 className="mb-6 text-lg font-semibold">روش پرداخت</h2>

      <Field>
        <FieldLabel>روش پرداخت را انتخاب کنید</FieldLabel>

        <FieldContent>
          <RadioGroup defaultValue="online" className="grid gap-3">
            {/* پرداخت آنلاین */}
            <Field
              orientation="horizontal"
              className="rounded-xl border p-4 transition-colors hover:bg-muted/50"
            >
              <RadioGroupItem value="online" id="payment-online" />

              <FieldContent>
                <FieldLabel htmlFor="payment-online" className="cursor-pointer">
                  پرداخت آنلاین
                </FieldLabel>

                <FieldDescription>
                  پرداخت امن از طریق درگاه بانکی
                </FieldDescription>
              </FieldContent>
            </Field>

            {/* پرداخت هنگام تحویل */}
            <Field
              orientation="horizontal"
              className="rounded-xl border p-4 transition-colors hover:bg-muted/50"
            >
              <RadioGroupItem value="cash" id="payment-cash" />

              <FieldContent>
                <FieldLabel htmlFor="payment-cash" className="cursor-pointer">
                  پرداخت هنگام تحویل
                </FieldLabel>

                <FieldDescription>
                  پرداخت هزینه هنگام دریافت سفارش
                </FieldDescription>
              </FieldContent>
            </Field>
          </RadioGroup>
        </FieldContent>
      </Field>
    </section>
  );
}
