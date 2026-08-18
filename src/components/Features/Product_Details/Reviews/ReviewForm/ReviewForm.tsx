"use client"
import { useForm , Controller} from "react-hook-form";
import RatingInput from "./RatingInput";
import SendReview from "./SendReview";
import { zodResolver } from "@hookform/resolvers/zod";
import { TreviewForm, ReviewFormSchema } from "../../../../../entities/Review/schema/ReviewFormSchema";
import FieldError from "@/components/ui/Error/FieldError";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";


export default function ReviewForm(){
    const {register , handleSubmit , reset , control , formState: {errors} } = useForm<TreviewForm>({
        resolver: zodResolver(ReviewFormSchema),
        defaultValues: {
            review: "",
            rating: 0,
        },
    });

    const sendReviewMutation = useMutation({
        mutationFn: async (data: TreviewForm)=>{
            await axios.post("" , data)
        },
        onSuccess: ()=>{
            toast.success("نظر شما با موفقیت ثبت شد و پس از تائید منتشر میشود");
            reset({
                review: "",
                rating: 0,
            });
        },
        onError: ()=>{
            toast.error("خطایی در حین ثبت نظر شما رخ داد")
        }
    })

    const sendReviewHandler = (data: TreviewForm)=>{
        sendReviewMutation.mutate(data)        
    }

    return(
        <form 
        onSubmit={handleSubmit(sendReviewHandler)}
        className="rounded-lg border p-3">
            <h3 className="font-semibold mb-2 lg:text-[17px]">نظر خود را بنویسید</h3>
            <p className="text-primary-text text-[14px] lg:text-[15px]">دیدگاه شما به انتخاب دیگران کمک میکند</p>



            <textarea 
            {...register("review")}
            disabled={sendReviewMutation.isPending}
            className="mt-4 mb-2 border rounded-md py-2.5 px-3.5 h-20 block w-full placeholder:text-[14px]"             
            placeholder="نظر خود را درباره این محصول بنویسید ..."
            />
            {errors.review?.message && 
            <FieldError
            className="mb-2.5" 
            message={errors.review?.message}/>}


            <div className="flex justify-between items-end">
                <div>                 

                    <Controller
                    control={control}
                    name="rating"
                    render={({field})=>(
                        <RatingInput
                        disabled={sendReviewMutation.isPending}
                        value={field.value}
                        onChange={field.onChange} 
                        error={errors.rating?.message}
                        />                                
                    )} 
                    />
                </div>

                <SendReview isPending={sendReviewMutation.isPending}/>
            </div>

        </form>        
    )
}