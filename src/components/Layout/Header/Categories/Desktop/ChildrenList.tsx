import { CategoryListItem } from "@/entities/Category/types/Category";
import { LineDotRightHorizontal, Minus } from "lucide-react";
import Link from "next/link";

interface Tprops {
  category: CategoryListItem;
  activeChildren: CategoryListItem[];
}

export default function ChildrenList({ activeChildren, category }: Tprops) {
  const thirdLevel = activeChildren.filter((item) => {
    if (item.path.length !== category.path.length + 1) return false;

    return category.path.every(
      (segment, index) => segment === item.path[index],
    );
  });

  return (
    <ul className="mb-5 h-max">
      <li>
        <Link
          target="blank"
          href={`/category/${[...category.path].reverse().join("/")}`}
          className="block px-1 py-2 text-black
                hover:bg-[#e8e8e8] w-full hover:text-theme"
        >
          <Minus className="inline-block me-px size-3" />
          <span className="font-bold text-[14px]">{category.name}</span>
        </Link>
      </li>
      {thirdLevel.map((cat) => (
        <li key={cat.id} className="w-full">
          <Link
            target="blank"
            href={`/category/${[...cat.path].reverse().join("/")}`}
            className="block px-2 py-2 text-[14px]
                     text-primary-text hover:bg-[#e8e8e8] w-full hover:text-theme"
          >
            - <span className="text-[13px]">{cat.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
