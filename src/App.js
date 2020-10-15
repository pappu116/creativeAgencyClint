import React, { createContext } from "react";
import "./App.css";
import Home from "./Component/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashbord from "./Component/Admin/Dashbord/Dashbord";
import ServiceList from "./Component/Admin/ServiceList/ServiceList";
import Order from "./Component/Admin/Order/Order";
import MakeAdmin from "./Component/MakAdmin/MakeAdmin";
import Review from "./Component/Review/Review";
import { useState } from "react";
import Login from "./Component/Login/Login";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import NotFound from "./Component/404/NotFound";
import OurPortfolio from "./Component/OurPortfolio/OurPortfolio";
import OurTeam from "./Component/OurTeam/OurTeam";
import Contac from "./Component/ContacUs/Contac";
import AddService from "./Component/AddService/AddService";

export const ServicesContext = createContext();

export const UserContext = createContext();
export const AdminContext = createContext();
function App() {
  const [item, setItem] = useState({});
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <ServicesContext.Provider value={[item, setItem]}>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <AdminContext.Provider value={[isAdmin, setIsAdmin]}>
          <Router>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <PrivateRoute path="/dashbord">
                <Dashbord />
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/addservice">
                <AddService />
              </Route>
              <Route path="/ourportfolio">
                <OurPortfolio />
              </Route>
              <Route path="/ourteam">
                <OurTeam />
              </Route>
              <Route path="/contact">
                <Contac />
              </Route>

              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/order">
                <Order />
              </Route>
              <Route path="/makeadmin">
                <MakeAdmin />
              </Route>
              <Route path="/review">
                <Review />
              </Route>
              <Route path="/servicelist">
                <ServiceList />
              </Route>
              <Route path="/*">
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </AdminContext.Provider>
      </UserContext.Provider>
    </ServicesContext.Provider>
  );
}

export default App;
