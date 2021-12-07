import React, { useEffect } from "react";
import { useCategory } from "../../../hooks";
import { ServicesPage } from "../../../components/Home";

export function Services() {
  const { loading, categories, getCategories } = useCategory();
  useEffect(() => getCategories(), []); // eslint-disable-line

  return (
    <>
      {loading ? (
        <p className="loader">Cargando...</p>
      ) : (
        <>
          <ServicesPage categories={categories} />
        </>
      )}
    </>
  );
}
