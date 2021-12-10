import React from "react";
import { Grid, Image } from "semantic-ui-react";
import { map } from "lodash";
import "./HomeProducts.scss";

export function HomeProducts(props) {
  const { products } = props;
  return (
    <Grid columns={4} textAlign="center" stackable className="home-products">
      {map(products, (product) => (
        <Grid.Column key={product.id}>
          <Image src={product.image} />
          <h4>{product.title}</h4>
          <p>{product.description}</p>
          <span>S/. {product.price}</span>
        </Grid.Column>
      ))}
    </Grid>
  );
}
