import { RefObject, useEffect, useState } from "react";

// محاسبه ستون های عنصر ورودی در عرض های مختلف عنصر 

export function useColumns(ref:  RefObject<HTMLDivElement | null>) {
  const [columns, setColumns] = useState(4);

  useEffect(() => {    
    if (!ref.current) return;

    const element = ref.current;

    const updateColumns = () => {

    const width = element.clientWidth;

    if (width >= 1536) {
    setColumns(6);
    } else if (width >= 1280) {
    setColumns(5);
    } else if (width >= 1024) {
    setColumns(4);
    } else if (width >= 768) {
    setColumns(3);
    } else if (width >= 640) {
    setColumns(2);
    } else {
    setColumns(2);
    }
    };

    updateColumns();

    const observer = new ResizeObserver(updateColumns);

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return columns;
}