import { Layout } from "./components";
import { Redirect, Route, Switch } from "react-router";
import { LandingPage, CartPage } from "./pages";
import "./styles/reset.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, selectUser } from "./features/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { IUser } from "./interfaces";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Jp1cRH4WC8gFLmqHNUrnePEvMEzKEpldRMWahtUhHGNS3a462wUqRtpL4mFY2a8YDQJlSxjevDcLJUrjlJBQ5cg00a3jb9FMw"
);

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const [currentuser, setCurrentUser] = useState<IUser>({
    firstName: "",
    email: "",
    id: "",
    createdAt: "",
  });

  useEffect(() => {
    async function stateChanged() {
      const unsubscribe = await onAuthStateChanged(auth, (user) => {
        if (user) {
          setCurrentUser({
            firstName: user.displayName,
            email: user.email,
            id: user.uid,
            createdAt: user?.metadata.creationTime,
          });
        }
      });
      return unsubscribe;
    }
    stateChanged();
  });
  dispatch(setUser(currentuser));
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
