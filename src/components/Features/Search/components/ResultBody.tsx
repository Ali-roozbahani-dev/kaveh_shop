import Spinner from "@/components/ui/Loading/Spinner";
import { Tproduct } from "@/entities/Product/types";
import ResultItem from "./ResultItem";
import EmptySearchResult from "@/components/ui/Empty/EmptySearchResult";

interface Tprops {
  results: Tproduct[] | undefined;
  isPending: boolean;
}

export default function ResultBody({ results, isPending }: Tprops) {
  if (isPending) {
    return (
      <div className="h-100 flex-center">
        <Spinner className={"text-[40px]"} />
      </div>
    );
  }

  return (
    <>
      {results?.length ? (
        <div
          style={{ direction: "ltr" }}
          className="-mx-(--card-spacing) h-100 space-y-4 
        overflow-y-scroll border-t  px-(--card-spacing) py-4 text-sm leading-relaxed"
        >
          <div style={{ direction: "rtl" }}>
            <ul>
              {results.map((product) => (
                <ResultItem key={product.id} product={product} />
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <EmptySearchResult className="w-full flex-center" />
      )}
    </>
  );
}
