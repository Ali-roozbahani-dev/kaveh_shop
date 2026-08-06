import RatingBar from "./RatingBar";


export default function RatingDistribution({counts}: {counts: {}}){

    return (
        <div className="w-max mx-auto ltr">
            <div>                
                <RatingBar rating={5} count={26}/>
                <RatingBar rating={4} count={10}/>
                <RatingBar rating={3} count={5}/>
                <RatingBar rating={2} count={133}/>
                <RatingBar rating={1} count={2}/>
            </div>
            
        </div>        
    )
}