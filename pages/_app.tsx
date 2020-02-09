import { ThemeProvider } from "styled-components";

import theme from "../styles/theme";
import "../styles/index.scss";

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
