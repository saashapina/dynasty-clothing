import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { SignInAndUp } from "./pages/SignInAndUp";

import { auth, createUserProfileDocument } from "./firebase/utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // if userAuth exists and signs in via Google or regular mail
      // auth state will change and be triggered,
      // when it is triggered get userRef data and
      // set data to the currentUser in state
      if (userAuth) {
        // In 'createUserProfileDocument' if a user doesnt exist in
        // the Firebase database it will be created.
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        //if userAuth doesnt exists set to null
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/sign-in" component={SignInAndUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
