import fetch from "isomorphic-unfetch";

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

IndexPage.getInitialProps = async () => {
  const results = await fetch(
    "http://localhost:3000/api/movies/current"
  ).then(r => r.json());

  return {
    results
  };
};

export default IndexPage;
