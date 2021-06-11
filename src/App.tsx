import React from "react";
import { Layout, Footer, Header } from "./components";
import { Redirect, Route, Switch } from "react-router";
import { LandingPage, CartPage } from "./pages";
const App: React.FC = () => {
  return (
    <>
      <Layout>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Checkout" component={CartPage} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Layout>
    </>
  );
};

export default App;
