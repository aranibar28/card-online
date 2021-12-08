import React, { useEffect } from "react";
import { useCategory } from "../../../hooks";
import { HomeServices } from "../../../components/Home";

export function Services() {
  const { categories, getCategories } = useCategory();
  useEffect(() => getCategories(), []); // eslint-disable-line

  return <HomeServices categories={categories} />;
}
