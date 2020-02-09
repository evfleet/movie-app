import React from "react";

import TopBar from "../TopBar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <TopBar />

      <div>{children}</div>
    </React.Fragment>
  );
};

export default Layout;
