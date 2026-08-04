import { CategoryListItem } from "../types/Category";

export const getSingleCategory = async (
  slug: string,
): Promise<CategoryListItem> => {
  const res = await fetch(`http://127.0.0.1:8000/api/categories/${slug}`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error("خطایی رخ داد.");
  }

  return res.json();
};
