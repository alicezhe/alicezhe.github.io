import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from './theme/GlobalStyles';
import { Header, Footer, Home, Projects} from "./components";

function App() {
  return (
    <div class="App h-100 d-flex flex-column justify-content-between">
      <GlobalStyle />
      <Router>
        <Header />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/projects" exact component={() => <Projects />} />
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
