import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useOrder, useTable } from "../../hooks";

export function OrdersHistory() {
  const { loading, orders, getOrdersByTable } = useOrder();
  const { getTableByNumber } = useTable();
  const { tableNumber } = useParams();
  console.log(orders);

  useEffect(() => {
    (async () => {
      const table = await getTableByNumber(tableNumber);
      const idTable = table[0].id;
      getOrdersByTable(idTable, "", "ordering=-status,-created_at");
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Historial de Pedidos</h1>
    </div>
  );
}
