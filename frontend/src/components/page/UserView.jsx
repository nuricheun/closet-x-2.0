import { Switch, Route } from "react-router-dom";
import NavBarContainer from "../navbar/NavbarContainer";
import Banner from "../banner/bannerContainer";
import DashboardContainer from "../dashboard/DashboardContainer";
import NewItemContainer from "../item/newItemContainer";
import OutfitCreate from "../outfit/outfitCreate";
import ItemIndexContainer from "../item/itemIndexContainer";

const UserView = () => {
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

export default UserView;
