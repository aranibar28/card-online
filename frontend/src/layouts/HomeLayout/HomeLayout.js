import React from "react";
import { HomeMenu } from "../../components/Home/HomeMenu";

export function HomeLayout(props) {
  const { children } = props;

  return (
    <div className="home-layout">
      <HomeMenu>{children}</HomeMenu>
      <div>HOLA</div>
    </div>
  );
}
