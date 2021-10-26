import { Layout } from "./components";
import { Redirect, Route, Switch } from "react-router";
import { LandingPage, CartPage } from "./pages";
import "./styles/reset.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./features/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { IUser } from "./interfaces";
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
  }, []);
  dispatch(setUser(currentuser));
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Checkout" component={CartPage} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

export default App;
