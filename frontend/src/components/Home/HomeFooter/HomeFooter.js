import React from "react";
import { Segment, Container, List } from "semantic-ui-react";
import { Link } from "react-router-dom";

export function HomeFooter() {
  return (
    <Segment
      inverted
      vertical
      style={{ margin: "2em 0em 0em", padding: "3em 0em" }}
    >
      <Container textAlign="center">
        <List horizontal inverted divided link size="small">
          <List.Item as={Link} to={"/"}>
            Ubicación
          </List.Item>
          <List.Item as={Link} to={"/"}>
            Contáctanos
          </List.Item>
          <List.Item as={Link} to={"/"}>
            Terminos y condiciones
          </List.Item>
          <List.Item as={Link} to={"/"}>
            Política de privacidad
          </List.Item>
        </List>
      </Container>
    </Segment>
  );
}
