import ReviewContent from "./ReviewContent";
import ReviewHeader from "./ReviewHeader";


export default function ReviewCard(){

    return (
        <div className="rounded-md border p-4 mb-3">
            <ReviewHeader />
            <ReviewContent />
        </div>        
    )
}