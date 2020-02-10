import React from "react";

import NavBar from "../NavBar";

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />

      {children}
    </React.Fragment>
  );
};

export default Layout;
