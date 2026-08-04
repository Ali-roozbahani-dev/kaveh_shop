import Link from "next/link";
import { MdChevronLeft } from "react-icons/md";
import ChildrenList from "./ChildrenList";
import { CategoryListItem } from "@/entities/Category/types/Category";

interface Tprops {
  activeParent: CategoryListItem;
  activeChildren: CategoryListItem[];
}

export default function ChildrensCategory({
  activeParent,
  activeChildren,
}: Tprops) {
  if (activeChildren.length === 0) return null;

  return (
    <div className="w-80 h-120 bg-white ltr overflow-y-auto p-2">
      <div className="rtl">
        <Link
          target="blank"
          href={`/category/${activeParent.slug}`}
          className="text-[14px] block mb-2 font-bold text-theme-4"
        >
          همه محصولات {activeParent.name}
          <MdChevronLeft className="inline-block text-[22px] ms-1" />
        </Link>
        <div className="max-w-200">
          {activeChildren.map((cat) => (
            <ChildrenList
              key={cat.id}
              activeChildren={activeChildren}
              category={cat}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
