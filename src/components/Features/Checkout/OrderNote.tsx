import { Textarea } from "@/components/ui/textarea";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";


export default function OrderNote(){

    return (
        <section className="rounded-xl border bg-background p-6 mt-5" dir="rtl">
            <h2 className="mb-6 text-lg font-semibold">
                یادداشت سفارش (اختیاری)
            </h2>

            <Field>              

                <FieldContent>
                <Textarea
                    id="order-note"
                    rows={4}
                    placeholder="اگر توضیحی درباره سفارش دارید اینجا وارد کنید. مثال: لطفاً قبل از ارسال تماس بگیرید."
                />
                </FieldContent>
            </Field>
        </section>
    )
}