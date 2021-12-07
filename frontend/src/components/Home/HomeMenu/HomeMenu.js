import React from "react";
import { Container, Menu, Image, Icon } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import "./HomeMenu.scss";
import { LOGO } from "../../../utils/constants";

export function HomeMenu(props) {
  const { children } = props;
  const { pathname } = useLocation();

  return (
    <div className="home-menu">
      <Home pathname={pathname} />
      <div className="content">{children} </div>
    </div>
  );
}

function Home(props) {
  const { pathname } = props;

  return (
    <Container>
      <Menu text className="navigation">
        <Menu.Item>
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
          <Menu.Item as={Link} to={"/client/"} active={pathname === "/client"}>
            Carta
          </Menu.Item>
          <Menu.Item as={Link} to={"/admin/"} active={pathname === "/admin/"}>
            <Icon name="log out" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Container>
  );
}
