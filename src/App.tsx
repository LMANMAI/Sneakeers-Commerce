import React from "react";
import { Layout, Cart } from "./components";
import { Redirect, Route, Switch } from "react-router";
import { LandingPage } from "./pages";
import "./styles/reset.css";
const App = (): JSX.Element => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Checkout" component={Cart} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

export default App;
