import React from "react";
import { Icon, Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks";
import "./TopMenu.scss";

export function TopMenu() {
  const { auth, logout } = useAuth();

  const renderName = () => {
    if (auth.me?.first_name && auth.me?.last_name) {
      return `${auth.me.first_name} ${auth.me.last_name}`;
    }
    return auth.me?.email;
  };

  return (
    <Menu fixed="top" className="top-menu-admin">
      <Menu.Item className="top-menu-admin__logo">
        <Link to={`/admin`}>
          <Image src="https://images.tcdn.com.br/img/img_prod/744994/1580692110_logo_horizontal_sem_fundo.png" />
        </Link>
      </Menu.Item>
      <Menu.Menu position="right" className="top-menu-admin__user">
        <Menu.Item>Hola, {renderName()}</Menu.Item>
        <Menu.Item onClick={logout}>
          <Icon name="sign-out" />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
