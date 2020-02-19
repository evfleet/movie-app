import App from "next/app";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { initStore } from "../stores/initStore";
import theme from "../styles/theme";
import "../styles/index.scss";

type Store = ReturnType<typeof initStore>;

interface CustomAppProps {
  store: Store;
}

class CustomApp extends App<CustomAppProps> {
  static async getInitialProps({ Component, ctx }) {
    const { store } = ctx;

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

export default withRedux(initStore)(withReduxSaga(CustomApp));
