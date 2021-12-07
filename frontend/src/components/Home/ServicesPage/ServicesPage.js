import React from "react";
import { Container, Image, Item } from "semantic-ui-react";
import { map } from "lodash";
import Carousel from "react-elastic-carousel";
import "./ServicesPage.scss";

export function ServicesPage(props) {
  const { categories } = props;

  return (
    <Container className="home-section">
      <Carousel
        itemsToShow={1}
        showArrows={true}
        enableAutoPlay
        autoPlaySpeed={5000}
        transitionMs={1000}
        className="carousel"
      >
        {map(categories, (category) => (
          <Item key={category.id}>
            <Image src={category.image} />
            <div>{category.title}</div>
          </Item>
        ))}
      </Carousel>
    </Container>
  );
}
