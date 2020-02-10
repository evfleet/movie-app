import React from "react";

import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import { Container, Wrapper } from "../shared/styled";

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <Container>
        <Carousel />
      </Container>
    </Wrapper>
  </Layout>
);

export default IndexPage;
