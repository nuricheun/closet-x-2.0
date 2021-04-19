import {Route, Switch, Redirect} from "react-router-dom";
import {AuthRoute, ProtectedRoute} from "../util/routeUtil";


import {Main} from "./main/Main";
import OutfitScrollbar from './outfit/OutfitScrollbarContainer'
import {UserView} from "./page/UserView";

import './App.css';

function App() {

  
  return (
    <div className="App">
      <Switch>
        <Route
        path="/(dashboard|closet|outfits|upload|itemindex)"
        component={UserView} />
        <AuthRoute exact path="/" component={Main} />
        <AuthRoute path="/items" component={OutfitScrollbar}/>
        <Redirect from="/" to="/" />
      </Switch>
    </div>
  );
}

export default App;
