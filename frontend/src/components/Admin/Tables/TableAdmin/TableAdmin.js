import React, { useState, useEffect } from "react";
import { size } from "lodash";
import { getOrdersByTableApi } from "../../../../api/order";
import { ORDER_STATUS } from "../../../../utils/constants";
import { Label } from "semantic-ui-react";
import { ReactComponent as IconTable } from "../../../../assets/table.svg";
import "./TableAdmin.scss";

export function TableAdmin(props) {
  const { table } = props;
  const [orders, setOrders] = useState([]);
  console.log(orders);

  useEffect(() => {
    (async () => {
      const response = await getOrdersByTableApi(
        table.id,
        ORDER_STATUS.PENDING
      );
      setOrders(response);
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="table-admin">
      {size(orders) > 0 ? (
        <Label circular color="orange">
          {size(orders)}
        </Label>
      ) : null}
      <IconTable />
      <p>Mesa {table.number}</p>
    </div>
  );
}
