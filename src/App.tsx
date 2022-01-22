import { Layout } from "./components";
import { Redirect, Route, Switch } from "react-router";
import { LandingPage, CartPage } from "./pages";
import "./styles/reset.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Jp1cRH4WC8gFLmqHNUrnePEvMEzKEpldRMWahtUhHGNS3a462wUqRtpL4mFY2a8YDQJlSxjevDcLJUrjlJBQ5cg00a3jb9FMw"
);

const App = (): JSX.Element => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Checkout">
          <Elements stripe={promise}>
            <CartPage />
          </Elements>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

export default App;
