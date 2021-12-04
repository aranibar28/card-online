import React, { useState, useEffect } from "react";
import { Image, Button, Icon } from "semantic-ui-react";
import { map, forEach } from "lodash";
import { useParams, useHistory } from "react-router-dom";
import { useOrder, useTable } from "../../../hooks";
import { removeProductCart, clearProductCart } from "../../../api/cart";
import "./ListProductCart.scss";

export function ListProductCart(props) {
  const { products, onReloadCart } = props;
  const [total, setTotal] = useState(0);
  const { addOrderToTable } = useOrder();
  const { getTableByNumber } = useTable();
  const { tableNumber } = useParams();
  const history = useHistory();

  useEffect(() => {
    let totalTemp = 0;
    forEach(products, (product) => {
      totalTemp += Number(product.price);
    });
    setTotal(totalTemp.toFixed(2));
  }, [products]); // eslint-disable-line

  const removeProduct = (index) => {
    removeProductCart(index);
    onReloadCart();
  };

  const createOrder = async () => {
    const tableData = await getTableByNumber(tableNumber);
    const idTable = tableData[0].id;
    for await (const product of products) {
      await addOrderToTable(idTable, product.id);
    }
    clearProductCart();
    history.push(`/client/${tableNumber}/orders`);
  };

  return (
    <div className="list-product-cart">
      {map(products, (product, index) => (
        <div key={index} className="list-product-cart__product">
          <div className="list-product-cart__product-container">
            <div>
              <Image src={product.image} avatar />
            </div>
            <span>{product.title}</span>
          </div>
          <div>
            <span>S/. {product.price}</span>
            <Icon name="close" onClick={() => removeProduct(index)} />
          </div>
        </div>
      ))}
      <Button primary fluid onClick={createOrder}>
        Realizar Pedido ( S/. {total} )
      </Button>
    </div>
  );
}
