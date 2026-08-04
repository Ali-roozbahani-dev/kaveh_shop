import Link from "next/link";
import { staticNavbarItems } from "./StaticList";




export default function StaticNavbarItems() {
  return (
    <>
      {staticNavbarItems.map((item) => {
        const Icon = item.icon;

        return (
          <li key={item.title} className="px-3 lg:px-1 lg:mx-4">
            <Link
              href={item.href}
              className="flex items-center hover:text-theme-hover py-3"
            >
              <Icon strokeWidth={1.5} className="w-5 h-5 me-1" />
              <span>{item.title}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
}