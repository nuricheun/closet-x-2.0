import {Route, Switch, Redirect} from "react-router-dom";
import {AuthRoute, ProtectedRoute} from "../util/routeUtil";
import Main from "./page/MainContainer";
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
        <AuthRoute path="/items" component={OutfitScrollbar}/>
        <Route exact path="/" component={Main} />
        <Redirect from="/" to="/" />
      </Switch>
    </div>
  );
}

export default App;
