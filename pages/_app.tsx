import App from "next/app";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { initStore } from "../state/initStore";
import theme from "../styles/theme";
import "../styles/index.scss";

type Store = ReturnType<typeof initStore>;

interface CustomAppProps {
  store: Store;
}

export default withRedux(initStore, { debug: true })(
  class CustomApp extends App<CustomAppProps> {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {})
        }
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;

      return (
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      );
    }
  }
);
