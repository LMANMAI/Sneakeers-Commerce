import { Layout } from "./components";
import { Redirect, Route, Switch } from "react-router";
import { LandingPage, CartPage } from "./pages";
import "./styles/reset.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser, setUserLogOut } from "./features/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Jp1cRH4WC8gFLmqHNUrnePEvMEzKEpldRMWahtUhHGNS3a462wUqRtpL4mFY2a8YDQJlSxjevDcLJUrjlJBQ5cg00a3jb9FMw"
);

const App = (): JSX.Element => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    async function stateChanged() {
      const unsubscribe = await onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(
            setUser({
              firstName: user?.displayName,
              email: user?.email,
              id: user?.uid,
              createdAt: user?.metadata.creationTime,
            })
          );
        } else {
          dispatch(setUserLogOut());
        }
      });
      return unsubscribe;
    }
    stateChanged();
  }, [dispatch]);

  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/Checkout">
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
