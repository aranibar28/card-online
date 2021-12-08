import React, { useRef } from "react";
import { Container, Image, Item } from "semantic-ui-react";
import { map } from "lodash";
import Carousel from "react-elastic-carousel";
import "./HomeServices.scss";

export function HomeServices(props) {
  const { categories } = props;
  const carouselRef = useRef(null);

  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(0);
    }
  };

  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(categories.length);
    }
  };

  const Loop = (currentItem) => {
    if (currentItem.index === categories.length - 1) {
      setTimeout(() => {
        carouselRef.current?.goTo(0);
      }, 1500);
    }
  };

  return (
    <Container className="services animate__animated animate__zoomIn">
      <Carousel
        ref={carouselRef}
        onChange={Loop}
        onPrevStart={onPrevStart}
        onNextStart={onNextStart}
        enableAutoPlay
        autoPlaySpeed={5000}
        disableArrowsOnEnd={false}
        className="carousel"
      >
        {map(categories, (category) => (
          <Item key={category.id}>
            <Image src={category.image} />
            <div className="category-title">{category.title}</div>
          </Item>
        ))}
      </Carousel>
    </Container>
  );
}
