"use client";

import Link from "next/link";
import { SheetClose } from "@/components/ui/sheet";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CategoryListItem } from "@/entities/Category/types/Category";

interface Tprops {
  parent: CategoryListItem;
  children: CategoryListItem[];
}

export default function CategoryItem({ parent, children }: Tprops) {
  const targetChildren = children.filter((child) => {
    return child.path.includes(parent.path[0]);
  });

  return targetChildren.length !== 0 ? (
    <AccordionItem value={parent.slug}>
      <AccordionTrigger className="px-4">{parent.name}</AccordionTrigger>

      <AccordionContent>
        <div className="flex flex-col">
          {targetChildren.map((child) => (
            <SheetClose key={child.slug} asChild>
              <Link
                target="blank"
                href={`/category/${child.slug}`}
                className="px-8 py-2 hover:bg-muted"
              >
                {child.name}
              </Link>
            </SheetClose>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  ) : (
    <Link
      className="py-2.5 px-4 border-b font-semibold "
      href={`/category/${parent.slug}`}
    >
      {parent.name}
    </Link>
  );
}
