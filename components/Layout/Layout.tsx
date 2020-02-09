import React from "react";

import NavBar from "../NavBar";
import { Container, Wrapper } from "../../shared/styled";

interface LayoutProps {
  container: boolean;
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  container
}) => {
  return (
    <React.Fragment>
      <NavBar />

      {container ? (
        <Wrapper>
          <Container>{children}</Container>
        </Wrapper>
      ) : (
        children
      )}
    </React.Fragment>
  );
};

export default Layout;
