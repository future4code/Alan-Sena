import Router from "./router";
import GlobalState from "./global/GlobalState";

const App = () => {
  return (
    <GlobalState>
      <Router />  
    </GlobalState>
  );
}

export default App;
