import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import PrivetRoute from "./PrivetRoute";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Groupe from "./pages/Group";
import Postnew from "./pages/Postnew";
import { SliderImg } from "./pages/SliderImg";
import Groupepost from "./pages/Groupepost";
import GroupeAdmin from "./pages/GroupeAdmin";
import Tablegroupeadmin from "./pages/Tablegroupeadmin"
import ProfileFrd from "./pages/ProfileFrd";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <switch>
          <Route
            exact
            path="/"
            render={(props) => <Home {...props} slides={SliderImg} />}
          />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivetRoute exact path="/Profile" component={Profile} />
          
          <PrivetRoute exact path="/feed" component={Feed} />
          <PrivetRoute exact path="/Groupe" component={Groupe} />
          <PrivetRoute exact path="/Post" component={Postnew} />
          <PrivetRoute exact path="/GroupeAdmin" component={GroupeAdmin} />
          <PrivetRoute exact path="/GroupeAdmin/:id" component={Tablegroupeadmin} />
          <PrivetRoute exact path="/Groupe/:id" component={Groupepost} />

          <PrivetRoute exact path="/Profile/:id" component={ProfileFrd} />
        </switch>
      </Router>
    </div>
  );
}

export default App;
