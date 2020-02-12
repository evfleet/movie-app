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
  // fired on first render on server
  // fired on every routing change to page on client
  console.log("get initial props fired");

  if (isServer) {
    store.dispatch({ type: "TEST_ACTION" });
  }

  const results = await fetch(
    "http://localhost:3000/api/movies/current"
  ).then(r => r.json());
};

export default IndexPage;
