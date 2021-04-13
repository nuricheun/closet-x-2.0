import {Switch, Redirect} from "react-router-dom";
import {AuthRoute, ProtectedRoute} from "../util/route_util";

import MainPage from "./main/Main";
import './App.css';

function App() {

  
  return (
    <div className="App">
      <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <Redirect from="/" to="/" />
      </Switch>
    </div>
  );
}

export default App;
