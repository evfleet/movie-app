import fetch from "isomorphic-unfetch";
import {} from "react";

import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import { Container, Wrapper } from "../styles/components";

const IndexPage = ({ results }) => {
  return (
    <Layout>
      <Wrapper>
        <Container>
          <Carousel />
        </Container>
      </Wrapper>
    </Layout>
  );
};

IndexPage.getInitialProps = async ({ isServer, store }) => {
  if (isServer) {
    store.dispatch({ type: "TEST_ACTION" });
  }

  const results = await fetch(
    "http://localhost:3000/api/movies/current"
  ).then(r => r.json());
};

export default IndexPage;
