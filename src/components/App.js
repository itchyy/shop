import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "../components/homepage/Homepage";
import Shop from "./shop/Shop";
import NavBar from "../components/navbar/NavBar";
import SignInSignUp from "../components/signInSignUp/SignInSignUp";
import { auth, createUserProfileDocument } from "../firebase/firebase";

import "./App.styles.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <NavBar currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
