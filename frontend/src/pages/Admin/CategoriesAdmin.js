import React, { useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { HeaderPage, TableCategoryAdmin } from "../../components/Admin";
import { useCategory } from "../../hooks";

export function CategoriesAdmin() {
  const { loading, categories, getCategories } = useCategory();

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <HeaderPage title="Categorias" btnTitle="Nueva Categoría" />
      {loading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
        <TableCategoryAdmin categories={categories} />
      )}
    </div>
  );
}
