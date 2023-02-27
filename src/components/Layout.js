import React from "react";
import BackgroundLines from "../components/BackgroundLines";
import BackgroundLine from "../components/BackgroundLine";
import Header from "../components/Header";

function Layout(props) {
  return (
    <div className="mi-wrapper">
      <BackgroundLines />
      <Header />
      {console.log(props)}
      {props.children}
    </div>
  );
}

export default Layout;
