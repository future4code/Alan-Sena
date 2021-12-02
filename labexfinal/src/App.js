import Router from "./router";
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import GlobalState from "./global/GlobalState";

const App = () => {
  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </GlobalState>
  );
}

export default App;
