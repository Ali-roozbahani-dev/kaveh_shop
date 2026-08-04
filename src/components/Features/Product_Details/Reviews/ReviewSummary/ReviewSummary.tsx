import RatingDistribution from "./RatingDistribution";
import ReviewScore from "./ReviewScore";


export default function ReviewSummary(){

    return (
        <div className="flex flex-col justify-center items-center xl:pe-5">
            <div className="w-full lg:w-max py-2">
                <ReviewScore />
            </div>

            <div className="w-full">
                <RatingDistribution />
            </div>
        </div>        
    )
}