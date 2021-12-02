import Router from "./router";
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
