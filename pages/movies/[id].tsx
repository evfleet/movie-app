import Layout from "../../components/Layout";
import { Container, Wrapper } from "../../styles/components";

const MoviePage = () => {
  return (
    <Layout>
      <Wrapper>
        <Container>
          <p>Movie Page</p>
        </Container>
      </Wrapper>
    </Layout>
  );
};

MoviePage.getInitialProps = async ({ isServer, store }) => {};

export default MoviePage;
