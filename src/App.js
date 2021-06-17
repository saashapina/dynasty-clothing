import "./App.css";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header";

import { Home } from "./pages/Home";
import Shop from "./pages/Shop";
import { SignInAndUp } from "./pages/SignInAndUp";
import Checkout from "./pages/Checkout";

import { auth, createUserProfileDocument } from "./firebase/utils";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/actions";
import { selectCurrentUser } from "./redux/user/selectors";

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // if userAuth signs up or signs in via Google or regular mail
      // get and set data to the currentUser in state
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        //if userAuth doesnt exists set to null
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/checkout" component={Checkout} />
          <Route
            path="/sign-in"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
