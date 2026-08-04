import { CategoryListItem } from "../types/Category";

export const getAllCategories = async (): Promise<CategoryListItem[]> => {
  const res = await fetch("http://127.0.0.1:8000/api/categories/", {
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error("خطایی رخ داد.");
  }

  return res.json();
};
