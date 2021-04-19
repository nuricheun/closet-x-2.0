import { Switch, Route } from "react-router-dom";
import NavBarContainer from "../navbar/NavbarContainer";
import Banner from "../banner/BannerContainer";
import DashboardContainer from "../dashboard/DashboardContainer";
import NewItemContainer from "../item/NewItemContainer";
import OutfitCreate from "../outfit/OutfitCreate";
import ItemIndexContainer from "../item/ItemIndexContainer";

export const UserView = () => {
  return (
    <div className="user-view">
      <Banner />
      <div className="user-body">
        <NavBarContainer />
        <Switch>
          <Route path="/closet" component={ItemIndexContainer} />
          <Route path="/dashboard" component={DashboardContainer} />
          <Route path="/upload" component={NewItemContainer} />
          <Route path="/outfits/new" component={OutfitCreate} />
        </Switch>
      </div>
    </div>
  );
};


