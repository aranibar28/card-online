import React from "react";
import { useLocation } from "react-router-dom";
import { HomeHeader, HomeFooter } from "../../components/Home";
import "./HomeLayout.scss";

export function HomeLayout(props) {
  const { children } = props;
  const { pathname } = useLocation();

  return (
    <>
      <div className="layout">
        <HomeHeader pathname={pathname} />
        <div className="content">{children}</div>
        <HomeFooter pathname={pathname} />
      </div>
    </>
  );
}
