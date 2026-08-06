import { MessageCircle } from "lucide-react";
import styles from "../styles/ProductTabs.module.css"
import ReviewForm from "./ReviewForm/ReviewForm";
import ReviewSummary from "./ReviewSummary/ReviewSummary";
import ReviewToolbar from "./ReviewToolbar/ReviewToolbar";
import ReviewList from "./ReviewList/ReviewList";
import LoadMoreReviews from "./LoadMoreReviews";
import { ReviewsSummary } from "@/entities/Product/types";


export default function Reviews({reviews_summary}: {reviews_summary: ReviewsSummary}){
    
    return (
        <div>
            <div className={styles.tabTitle}>
                <MessageCircle className="size-4 md:size-6 me-2"/>
                <h1>دیدگاه کاربران</h1>                
            </div>
            <p className="text-primary-text2 py-4">تجربه و نظر خود را با دیگران به اشتراک بگذارید</p>

            <div className="flex flex-wrap justify-center py-4">
                <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                    <ReviewSummary reviews_summary={reviews_summary}/>
                </div>

                <div className="lg:order-first w-full lg:w-1/2">
                    <ReviewForm />
                </div>
            </div>
            <ReviewToolbar />
            <ReviewList />
            <LoadMoreReviews />
        </div>        
    )
} 