import React, { useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { HeaderPage, TableProductAdmin } from "../../components/Admin";
import { useProduct } from "../../hooks";

export function ProductAdmin() {
  const { loading, products, getProducts } = useProduct();

  useEffect(
    () => getProducts(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <HeaderPage title="Productos" btnTitle="Nuevos Productos" />
      {loading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
        <TableProductAdmin products={products} />
      )}
    </>
  );
}
