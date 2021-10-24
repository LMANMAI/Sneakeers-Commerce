import { Provider, useSelector } from "react-redux";
import { store } from "./app/store";
import { Layout } from "./components";
import { Redirect, Route, Switch } from "react-router";
import { LandingPage, CartPage } from "./pages";
import { selectCountProduct } from "./features/sneakersSlice";
import "./styles/reset.css";
const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Layout>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Checkout" component={CartPage} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Provider>
  );
};

export default App;
