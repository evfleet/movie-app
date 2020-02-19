import fetch from "isomorphic-unfetch";

import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import { Container, Wrapper } from "../styles/components";
import { entityActions } from "../stores/entities";

const IndexPage = () => {
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
  store.dispatch(entityActions.fetchEntities("/movies/current", "featured"));
};

export default IndexPage;
