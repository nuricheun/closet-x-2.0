import { Switch, Route } from "react-router-dom";
import NavBarContainer from "../navbar/NavbarContainer";
import Banner from "../banner/BannerContainer";
import DashboardContainer from "../dashboard/DashboardContainer";
import { OutfitCreate } from "../outfit/OutfitCreate";
import ItemIndexContainer from "../item/ItemIndexContainer";
import './Userview.css'


export const UserView = () => {
  return (
    <div className="user-view">
      <Banner />
      <div className="user-body">
        <NavBarContainer />
        <Switch>
          <Route path="/dashboard" component={DashboardContainer} />
          <Route path="/closet" component={ItemIndexContainer} />
          <Route path="/outfits/new" component={OutfitCreate} />
        </Switch>
      </div> 
    </div>
  );
};


