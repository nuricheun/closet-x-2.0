import {Route, Switch, Redirect} from "react-router-dom";
import {AuthRoute, ProtectedRoute} from "../util/routeUtil";
import {HTML5Backend} from "react-dnd-html5-backend";
import Main from "./page/MainContainer";
import OutfitScrollbar from './outfit/OutfitScrollbarContainer'
import {UserView} from "./page/UserView";
import { DndProvider } from "react-dnd";

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <DndProvider backend={HTML5Backend}>
          <Route
          path="/(dashboard|closet|outfits|upload|itemindex)"
          component={UserView} />
          <AuthRoute path="/items" component={OutfitScrollbar}/>
          <Route exact path="/" component={Main} />
          <Redirect from="/" to="/" />
        </DndProvider>
      </Switch>
    </div>
  );
}

export default App;
