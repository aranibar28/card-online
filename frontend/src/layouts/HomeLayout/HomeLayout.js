import React from "react";
import { Container } from "semantic-ui-react";
import "./HomeLayout.scss";

export function HomeLayout(props) {
  const { children } = props;
  return (
    <Container>
      <h1>HomeLayout</h1>
      <div className="client-layout__content">{children}</div>
    </Container>
  );
}
