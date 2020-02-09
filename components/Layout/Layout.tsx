import React from "react";

import NavBar from "../NavBar";
import { Container, Wrapper } from "../../shared/styled";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />

      <Wrapper>
        <Container>{children}</Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default Layout;
