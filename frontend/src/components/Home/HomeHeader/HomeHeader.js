import React from "react";
import { Container, Menu, Image, Icon } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import { LOGO } from "../../../utils/constants";
import "./HomeHeader.scss";

export function HomeHeader() {
  const { pathname } = useLocation();

  return (
    <>
      <Menu text className="navigation">
        <Container>
          <Menu.Item as={Link} to={"/"}>
            <Image src={LOGO.src} />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item as={Link} to={"/"} active={pathname === "/"}>
              Inicio
            </Menu.Item>
            <Menu.Item
              as={Link}
              to={"/services"}
              active={pathname === "/services"}
            >
              Servicios
            </Menu.Item>
            <Menu.Item as={Link} to={"/about"} active={pathname === "/about"}>
              Nosotros
            </Menu.Item>
            <Menu.Item
              as={Link}
              to={"/client/"}
              active={pathname === "/client"}
            >
              Carta
            </Menu.Item>
            <Menu.Item as={Link} to={"/admin/"} active={pathname === "/admin/"}>
              <Icon name="log out" />
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </>
  );
}
