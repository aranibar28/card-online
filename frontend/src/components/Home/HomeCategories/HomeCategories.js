import React, { useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Container, Image, Item } from "semantic-ui-react";
import { map } from "lodash";
import Carousel from "react-elastic-carousel";
import "./HomeCategories.scss";

export function HomeCategories(props) {
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

  const location = useLocation();
  const history = useHistory();
  const goToCategory = (id) => {
    history.push(`${location.pathname}/${id}`);
  };

  return (
    <Container className="services animate__animated animate__zoomIn">
      <div>
        <h2> </h2>
      </div>
      <Carousel
        ref={carouselRef}
        onChange={Loop}
        onPrevStart={onPrevStart}
        onNextStart={onNextStart}
        enableAutoPlay
        autoPlaySpeed={5000}
        disableArrowsOnEnd={false}
        itemsToShow={3}
        showArrows={false}
        enableMouseSwipe={true}
        className="carousel"
      >
        {map(categories, (category) => (
          <Item
            key={category.id}
            className="services__item"
            onClick={() => goToCategory(category.id)}
          >
            <Image src={category.image} />
            <div className="category-title">{category.title}</div>
          </Item>
        ))}
      </Carousel>
    </Container>
  );
}
