import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";


export default function LoadMoreReviews(){

    return (
        <Button variant={"secondary"} className="rounded-sm flex mx-auto">
            مشاهده بیشتر نظرات
            <ChevronDown />
        </Button>
    )
}