import React, { Component } from "react";
import HomePage from "./pages/HomePage";
import NewPage from "./pages/NewPage";
import ProfilePage from "./pages/ProfilePage";
import ScenicPage from "./pages/ScenicPage";
import SearchPage from "./pages/SearchPage";
import MobileHackathon from "./components/react-mobile-hackathon";
import { Route, Switch } from "react-router-dom";
import CompletedRidePage from "./pages/CompletedRide";
import GroupCyclePage from "./pages/GroupCyclePage";
import SearchResultPage from "./pages/SearchResultPage";

class App extends Component {
  render() {
    return (
      <MobileHackathon appName="Cycl" displayUrl="cycl.com">
        <Switch>
          <Route path="/new" component={NewPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/scenic" component={ScenicPage} />
          <Route path="/group-cycle" component={GroupCyclePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/search-result" component={SearchResultPage} />
          <Route path="/completed-ride" component={CompletedRidePage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </MobileHackathon>
    );
  }
}

export default App;
