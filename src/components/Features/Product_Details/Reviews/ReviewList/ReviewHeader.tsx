import AverageStars from "../ReviewSummary/AverageStars";

export default function ReviewHeader() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <span className="font-bold">{"علی روزبهانی"}</span>
      </div>

      <div className="flex items-center">
        <span className="me-4 text-primary-text2 text-[12px] lg:text-[13px]">
          {"1403/4/2"}
        </span>   

        <AverageStars 
        average={4} 
        StarclassName="size-3 lg:size-3.5"
        />        
      </div>
    </div>
  );
}
