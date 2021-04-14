import {Switch, Redirect} from "react-router-dom";
import {AuthRoute, ProtectedRoute} from "../util/routeUtil";

import MainPage from "./main/Main";
import OutfitScrollbar from './outfit/OutfitScrollbarContainer'

import './App.css';

function App() {

  
  return (
    <div className="App">
      <Switch>
        {/* <AuthRoute exact path="/" component={MainPage} /> */}
        <AuthRoute path="/" component={OutfitScrollbar}/>
        <Redirect from="/" to="/" />
      </Switch>
    </div>
  );
}

export default App;
