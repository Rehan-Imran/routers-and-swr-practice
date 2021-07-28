import "./App.css";
import RenderApiData from "./RenderApiData";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/renderedData" component={RenderApiData} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="renderedData">
        <button>click Me</button>
      </Link>
    </div>
  );
};
export default App;
