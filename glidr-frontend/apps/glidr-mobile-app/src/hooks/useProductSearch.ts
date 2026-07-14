import { useMemo, useState } from "react";

import { products } from "@/mock";
import { Product } from "@/types/product";

export default function useProductSearch() {
  const [query, setQuery] = useState("");

  const searchResults = useMemo<Product[]>(() => {
    const text = query.trim().toLowerCase();

    if (!text) return [];

    return products.filter((product) => {
      return (
        product.name.toLowerCase().includes(text) ||
        product.brand.toLowerCase().includes(text) ||
        product.categoryId.toLowerCase().includes(text)
      );
    });
  }, [query]);

  return {
    query,
    setQuery,
    searchResults,
  };
}